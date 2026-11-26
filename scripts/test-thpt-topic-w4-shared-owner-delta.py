#!/usr/bin/env python3
"""Two CP20d/CP25 owner-approved public bank deltas shared with CĐ18."""
import functools,http.server,threading,json,hashlib,pathlib,re,subprocess,sys
ROOT=pathlib.Path(__file__).resolve().parent.parent
M=json.loads((ROOT/"prototypes/thpt/release-queue/W4_CD16_18_SOURCE_INTAKE_20261123.json").read_text())
D=M["sharedOwnerDelta"]
BANKS=["docs/assets/data/thpt-g12-chii-b06-b08-public-r00.json","docs/assets/data/thpt-g12-chv-b14-b17-public-r01.json"]
def git(*args):
    return subprocess.check_output(("git",*args),cwd=ROOT)
def blob(b):
    return hashlib.sha1(f"blob {len(b)}\0".encode()+b).hexdigest()
def field(s,label):
    m=re.search(r"^- \*\*"+re.escape(label)+r":\*\* (.+)$",s,re.M)
    assert m,label
    return m[1].strip()
topic=(ROOT/"docs/thpt-preview/chuyen-de/cd18/luyen-tap.md").read_text()
for i,(d,path) in enumerate(zip(D,BANKS)):
    raw=(ROOT/path).read_bytes()
    assert blob(raw)==d["publicBank"]
    old=json.loads(git("cat-file","blob",d["baselineBank"]))
    new=json.loads(raw)
    ix=next(j for j,x in enumerate(old["items"]) if x["item_id"]==d["id"])
    before=old["items"][ix].copy()
    after=new["items"][ix]
    assert {k for k in after if before[k]!=after[k]}==set(d["fields"])
    old["items"][ix]=after
    assert old==new and new["mode"]=="CLIENT_SELF_CHECK_NO_MASTERY"
    src=git("cat-file","blob",d["sourceBlob"]).decode()
    receipt=git("cat-file","blob",d["q18Blob"]).decode()
    v2=git("cat-file","blob",d["v2Blob"]).decode()
    ready=git("cat-file","blob",d["readyBlob"]).decode()
    assert d["sourceBlob"] in receipt and d["sourceBlob"] in v2 and d["q18Blob"] in v2
    assert all(d[k] in ready for k in ("sourceBlob","q18Blob","v2Blob")) and "STATE: CONTENT_READY" in ready
    block=topic.split("DISPLAY_ONLY_CANONICAL: "+d["id"]+";",1)[1].split("</details>",1)[0]
    assert d["sourceBlob"] in block
    if i==0:
        marker="**"+chr(96)+"ITEM_ID="
        sgk=src.split(marker+d["id"]+chr(96),1)[1].split(marker,1)[0]
        assert after["stem"]==field(sgk,"Đề mới") and after["answer"]==field(sgk,"Đáp án") and after["solution"]==field(sgk,"Lời giải/suy luận")
        assert all(after[k] in block for k in ("stem","answer","solution"))
        assert [x["position"] for x in new["end_references"] if x["item_id"]==d["id"]]==[1]
    else:
        sgk=src.split("#### "+d["id"]+" — SGK_WRITTEN",1)[1].split("#### ",1)[0]
        assert after["solution"]==field(sgk,"Lời giải có suy luận")
        assert "Hai đường thẳng có các vectơ chỉ phương này vuông góc với nhau; chưa thể kết luận chúng cắt nhau nếu chưa kiểm tra vị trí." in block
        assert not any(x["item_id"]==d["id"] for x in new["end_references"])
    print("PASS owner delta",d["id"],"only",d["fields"],"IDs/roles/rubrics/END refs preserved")
if "--source-only" in sys.argv:
    sys.exit(0)
from playwright.sync_api import sync_playwright,expect
class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self,p):
        prefix="/self-learning-math"
        if p.startswith(prefix+"/"): p=p[len(prefix):]
        return super().translate_path(p)
server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(Handler,directory=str(ROOT/"site")))
threading.Thread(target=server.serve_forever,daemon=True).start()
BASE=f"http://127.0.0.1:{server.server_address[1]}/self-learning-math/thpt-preview/sgk/lop-12/"
try:
    with sync_playwright() as pw:
        for engine in ("chromium","webkit"):
            browser=getattr(pw,engine).launch(headless=True)
            for width in (390,820,1440):
                ctx=browser.new_context(viewport={"width":width,"height":850})
                page=ctx.new_page()
                def load(route):
                    res=page.goto(BASE+route,wait_until="domcontentloaded")
                    assert res and res.ok,(engine,width,route)
                for route,phrase in (("chuong-ii/bai-6/","cùng hướng và cùng phương với mọi vectơ"),("chuong-ii/bai-8/","xét theo quy ước vectơ-không"),("chuong-v/bai-15/","không bắt buộc có giao điểm")):
                    load(route)
                    assert phrase in page.locator("article").text_content()
                for chapter,route,item,phrase in (
                    ("II","chuong-ii/luyen-tap/","THPT-G12-B06-P02","cùng hướng và cùng phương theo quy ước"),
                    ("V","chuong-v/luyen-tap/","THPT-G12-B15-W05","chưa thể kết luận chúng cắt nhau nếu chưa kiểm tra vị trí")):
                    load(route)
                    hub=page.locator("[data-g12-chii-hub]" if chapter=="II" else "[data-g12-chv-hub]")
                    expect(hub).to_have_attribute("data-g12-golden-hub-ready","true",timeout=30000)
                    page.evaluate("(id)=>{location.hash='#'+id.toLowerCase()}",item)
                    dlg=page.locator('dialog[data-g12-golden-dialog="'+chapter+'"]')
                    expect(dlg).to_be_visible(timeout=15000)
                    expect(dlg.locator("[data-thpt-canonical-item]")).to_have_attribute("data-thpt-canonical-item",item)
                    answer=dlg.locator(".thpt-g12-golden-solution")
                    assert not answer.get_attribute("open") and phrase not in dlg.inner_text()
                    answer.locator("summary").click()
                    expect(answer.locator(".thpt-r4-formative-reveal")).to_be_visible()
                    expect(answer).to_contain_text(phrase)
                    if chapter=="II":
                        expect(dlg.locator("mjx-container").first).to_be_visible(timeout=20000)
                        assert dlg.locator("mjx-merror").count()==0
                    answer.locator("summary").click()
                    assert phrase not in dlg.inner_text()
                    dlg.locator("[aria-label='Đóng cửa sổ']").click()
                load("chuong-ii/tu-kiem-tra-chuong/")
                end=page.locator('[data-g12-chii-selfcheck="END"]')
                expect(end).to_have_attribute("data-g12-chii-ready","true",timeout=30000)
                entries=end.locator(".g12-chii-selfcheck-item")
                expect(entries).to_have_count(16)
                expect(entries.first).to_have_attribute("data-canonical-item","THPT-G12-B06-P02")
                expect(end.locator(".g12-chii-answer:not([hidden])")).to_have_count(0)
                submit=end.locator("button[data-g12-chii-final]")
                submit.click()
                expect(end.locator(".g12-chii-answer:not([hidden])")).to_have_count(0)
                for j in range(16):
                    end.locator(".g12-chii-quiz-jump").nth(j).click()
                    entries.nth(j).locator("textarea").fill("Bài tự giải thử")
                end.locator(".g12-chii-quiz-jump").first.click()
                submit.click()
                expect(submit).to_be_disabled()
                expect(entries.first.locator(".g12-chii-answer")).to_be_visible()
                expect(entries.first.locator(".g12-chii-answer")).to_contain_text("cùng hướng và cùng phương theo quy ước")
                expect(end.locator(".g12-chii-answer:visible")).to_have_count(1)
                ctx.close()
                print("PASS affected SGK Knowledge / public Practice P02,W05 / same-ID END P02",engine,width)
            browser.close()
finally:
    server.shutdown()
