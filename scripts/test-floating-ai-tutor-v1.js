#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const ui=read("docs/assets/javascripts/floating-ai-tutor-v1.js");
const prompt=read("docs/assets/javascripts/firebase-gemini-v1.js");
const mk=read("mkdocs.yml");
const ok=(v,m)=>{if(!v)throw Error(m)};
ok(ui.includes("isReadingPage")&&ui.includes("(?:roadmap-toan-thcs|self-learning-math)\\"),"explicit teaching-route gate");
const routeSource=ui.match(/const isReadingPage = \(\) => \{[\s\S]*?\n  \};/)?.[0];
ok(routeSource,"route function remains independently testable");
const mayMount = pathname => require("vm").runInNewContext(routeSource+"\nisReadingPage();",{location:{pathname}});
for(const pathname of [
  "/roadmap-toan-thcs/kien-thuc/04-bieu-thuc-dai-so/",
  "/roadmap-toan-thcs/kien-thuc/04-bieu-thuc-dai-so/bai-tap/",
  "/roadmap-toan-thcs/kien-thuc/04-bieu-thuc-dai-so/core/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/bai-toan-kinh-dien/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/kho-bai-mo-neo/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/de-luyen-01/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/de-luyen-01-dap-an/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/bai-tap/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/anchor-25-004/",
  "/kien-thuc/25-tong-hop-on-thi-10/anchor-25-011/index.html",
  "/roadmap-toan-thcs/thpt-preview/sgk/chuong-vi/bai-16/",
  "/roadmap-toan-thcs/thpt-preview/sgk/lop-11/chuong-i/bai-1/",
  "/self-learning-math/thpt-preview/sgk/lop-11/chuong-ix/bai-31/",
  "/self-learning-math/thpt-preview/sgk/lop-12/chuong-i/bai-1/",
  "/self-learning-math/thpt-preview/sgk/lop-12/chuong-i/bai-5/index.html",
  "/self-learning-math/thpt-preview/sgk/lop-12/chuong-ii/bai-6/",
  "/thpt-preview/sgk/lop-11/chuong-i/bai-1/",
  "/thpt/sgk/lop-12/chuong-i/bai-1/",
  "/roadmap-toan-thcs/thpt-preview/chuyen-de/ham-so/kien-thuc/",
  "/roadmap-toan-thcs/thpt-preview/chuyen-de/ham-so/luyen-tap/",
  "/thpt-preview/sgk/lop-11/chuong-iv/luyen-tap/",
  "/thpt-preview/sgk/lop-12/chuong-iii/luyen-tap/",
  "/thpt-preview/sgk/lop-12/chuong-v/luyen-tap/",
  "/thpt-preview/thu-vien/tu-luan/",
  "/self-learning-math/kien-thuc/04-bieu-thuc-dai-so/",
  "/self-learning-math/kien-thuc/25-tong-hop-on-thi-10/anchor-25-004/",
  "/self-learning-math/thpt-preview/sgk/chuong-vi/bai-16/",
  "/self-learning-math/thpt-preview/chuyen-de/ham-so/kien-thuc/"
])ok(mayMount(pathname),"reading route needs contextual Tutor: "+pathname);
for(const pathname of [
  "/roadmap-toan-thcs/kien-thuc/04-bieu-thuc-dai-so/tu-kiem-tra/",
  "/roadmap-toan-thcs/kien-thuc/02-so-va-phep-tinh/tu-kiem-tra-tu-luan/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/tu-danh-gia-ky-nang-thi/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/tu-kiem-tra-dap-an/",
  "/roadmap-toan-thcs/kien-thuc/25-tong-hop-on-thi-10/tu-danh-gia-ky-nang-thi/",
  "/roadmap-toan-thcs/ai/ai-tutor-core-contract/",
  "/roadmap-toan-thcs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong/",
  "/roadmap-toan-thcs/thpt-preview/chuyen-de/ham-so/tu-kiem-tra/",
  "/self-learning-math/kien-thuc/04-bieu-thuc-dai-so/tu-kiem-tra/",
  "/self-learning-math/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong/",
  "/self-learning-math/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong/",
  "/self-learning-math/thpt-preview/sgk/lop-12/chuong-i/tu-kiem-tra-chuong/",
  "/self-learning-math/thpt-preview/sgk/lop-12/chuong-ii/tu-kiem-tra-chuong/",
  "/self-learning-math/thpt-preview/sgk/lop-12/chuong-ii/bai-6/tu-kiem-tra/",
  "/self-learning-math/thpt-preview/chuyen-de/ham-so/tu-kiem-tra/"
])ok(!mayMount(pathname),"assessed/nonreading route must not mount Tutor: "+pathname);
ok(ui.includes('activity: "learning"')&&ui.includes('helpMode: "TEACH_FROM_START"'),"Tutor remains non-grading and has no assessment context");
ok(ui.includes("selectedText(root)")&&ui.includes("sectionText(root, heading)"),"selection or active section context");
ok(ui.includes("tutor-girl-awake.webp")&&ui.includes("floating-ai-head-face"),"approved avatar in launcher and panel");
ok(ui.includes("Giải thích dễ hơn")&&ui.includes("Cho ví dụ khác")&&ui.includes("Vì sao lại đúng?")&&ui.includes("Em cần nhớ gì?"),"four reading quick actions");
ok(ui.includes('provider: "gemini"')&&ui.includes("RoadmapRichMath"),"real Gemini through existing validated tutor and math renderer");
ok(ui.includes("maxLength = 500")&&ui.includes("Không nhập thông tin cá nhân"),"bounded free question and privacy cue");
ok(ui.includes("const thptGrade = () =>") && ui.includes("thptGrade() : null,"),
  "G11/G12 Tutor context must be grade-specific without changing THCS");
ok(prompt.includes('activity === "learning"')&&prompt.includes("NGỮ CẢNH ĐỌC BÀI HỌC"),"provider distinguishes learning from exercise");
ok(mk.includes("floating-ai-tutor-v1.js"),"global script registered");
ok(ui.includes("THPT-SGK-KNTT")&&ui.includes("THPT-TOPIC-KNTT")&&ui.includes("activeFormativeDialog")&&ui.includes("MutationObserver(sync)"),
  "Shared Tutor must support both THPT journeys and remain usable inside Golden modals");
ok(prompt.includes('String(context.current_layer || "").startsWith("THPT-")'),
  "Gemini system prompt must distinguish THPT from THCS without changing THCS teaching");

ok(!ui.includes("innerHTML = response")&&!ui.includes("insertAdjacentHTML"),"AI response not injected as HTML");
console.log("PASS: Gemini on public SGK/Topic/THCS Core, Practice, Written, Anchor and Golden modals; not on Q16.");
