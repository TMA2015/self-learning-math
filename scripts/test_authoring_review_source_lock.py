#!/usr/bin/env python3
"""Offline synthetic regression tests for authoring_review_source_lock.py."""
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).with_name('authoring_review_source_lock.py')


class SourceLockTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        self.repo = self.root / 'repo'
        self.repo.mkdir()
        self.out = self.root / 'transfers'
        self.out.mkdir()
        self.private = self.root / 'private_sources'
        self.private.mkdir()
        self.git('init', '-q')
        self.git('config', 'user.email', 'qa@example.invalid')
        self.git('config', 'user.name', 'Offline QA')
        (self.repo / 'content').mkdir()
        for n in range(1, 4):
            name = f'TOPIC-QA-{n:03}'
            (self.repo / 'content' / f'{name}.md').write_text(
                f'# Topic QA {n}\nPACKET_ID: {name}\nLEARNING_PATH: TOPIC\n'
                f'STANDARD_ID: SLM-THPT-QUALITY-ONE\nEXPECTED_OUTCOME_IDS: TOPIC_TEST_OUT_01\nB15_OUT_01: reused SGK only\n'
                '## Kiến thức\n## Luyện tập\n## Tự kiểm tra\n', encoding='utf-8')
        self.git('add', 'content')
        self.git('commit', '-qm', 'synthetic source fixtures')

    def git(self, *args):
        return subprocess.run(['git', '-C', str(self.repo), *args], check=True,
                              capture_output=True, text=True)

    def run_tool(self, *args, ok=True):
        r = subprocess.run([sys.executable, str(SCRIPT), *map(str, args)],
                           capture_output=True, text=True)
        self.assertEqual(r.returncode == 0, ok, (r.stdout, r.stderr))
        return r

    def make_public(self, n=1):
        packet = f'TOPIC-QA-{n:03}'
        self.run_tool('prepare', '--repo', self.repo, '--source', f'content/{packet}.md',
                      '--packet', packet, '--scope', 'TOPIC', '--outdir', self.out)
        files = list(self.out.glob(f'Temp_{packet}_*.md'))
        recs = list(self.out.glob(f'AuthorLock_{packet}_*.txt'))
        self.assertEqual(len(files), 1)
        self.assertEqual(len(recs), 1)
        return files[0], recs[0]

    def test_sgk_chapter_legacy_outcome_fallback(self):
        source = self.repo / 'content' / 'SGK-FIXTURE.md'
        source.write_text('# SGK synthetic test\nPACKET_ID: SGK-FIXTURE\n'
                          'LEARNING_PATH: SGK_CHAPTER\n'
                          'STANDARD_ID: SLM-THPT-QUALITY-ONE\n'
                          'B15_OUT_01: synthetic SGK outcome\n', encoding='utf-8')
        self.git('add', 'content/SGK-FIXTURE.md')
        self.git('commit', '-qm', 'synthetic SGK fixture')
        r = self.run_tool('prepare', '--repo', self.repo,
                          '--source', 'content/SGK-FIXTURE.md', '--packet', 'SGK-FIXTURE',
                          '--scope', 'SGK_CHAPTER', '--outdir', self.out)
        self.assertIn('OUTCOME_COUNT: 1', r.stdout)

    def test_topic_requires_explicit_topic_outcomes(self):
        source = self.repo / 'content' / 'TOPIC-WITHOUT-OUTCOME.md'
        source.write_text('# Synthetic topic missing its own outcomes\n'
                          'PACKET_ID: TOPIC-NO-OUTCOME\nLEARNING_PATH: TOPIC\n'
                          'STANDARD_ID: SLM-THPT-QUALITY-ONE\n'
                          'B15_OUT_01: reused SGK outcome only\n', encoding='utf-8')
        self.git('add', 'content/TOPIC-WITHOUT-OUTCOME.md')
        self.git('commit', '-qm', 'fixture for missing Topic outcome declaration')
        r = self.run_tool('prepare', '--repo', self.repo,
                          '--source', 'content/TOPIC-WITHOUT-OUTCOME.md',
                          '--packet', 'TOPIC-NO-OUTCOME', '--scope', 'TOPIC',
                          '--outdir', self.out, ok=False)
        self.assertIn('TOPIC requires explicit', r.stderr)

    def test_private_inside_public_checkout_is_rejected(self):
        source = self.repo / 'private' / 'private-rd1.md'
        source.parent.mkdir()
        source.write_text('PACKET_ID: RD1-QA\nLEARNING_PATH: TOPIC\n'
                          'STANDARD_ID: SLM-THPT-QUALITY-ONE\n'
                          'EXPECTED_OUTCOME_IDS: TOPIC_PRIVATE_OUT_01\n')
        r = self.run_tool('prepare-private', '--repo', self.repo, '--source', source,
                          '--packet', 'RD1-QA', '--scope', 'TOPIC', '--outdir', self.out,
                          ok=False)
        self.assertIn('OUTSIDE the public Git checkout', r.stderr)

    def test_public_verified_then_one_byte_fails(self):
        source, rec = self.make_public()
        self.run_tool('preflight', '--repo', self.repo, '--file', source, '--receipt', rec)
        source.write_bytes(source.read_bytes() + b'!')
        self.run_tool('preflight', '--repo', self.repo, '--file', source, '--receipt', rec, ok=False)

    def test_uncommitted_edit_fails_before_upload(self):
        (self.repo / 'content' / 'TOPIC-QA-001.md').write_text('changed')
        self.run_tool('prepare', '--repo', self.repo, '--source', 'content/TOPIC-QA-001.md',
                      '--packet', 'TOPIC-QA-001', '--scope', 'TOPIC', '--outdir', self.out,
                      ok=False)

    def test_private_is_outside_repo_and_verified(self):
        source = self.private / 'private-test.md'
        source.write_text('# synthetic no protected content\nPACKET_ID: RD1-QA\n'
                          'LEARNING_PATH: TOPIC\nSTANDARD_ID: SLM-THPT-QUALITY-ONE\n'
                          'EXPECTED_OUTCOME_IDS: TOPIC_PRIVATE_OUT_01\n', encoding='utf-8')
        self.run_tool('prepare-private', '--repo', self.repo, '--source', source,
                      '--packet', 'RD1-QA', '--scope', 'TOPIC', '--outdir', self.out)
        temp = next(self.out.glob('Temp_RD1-QA_PRIVATE_*.md'))
        rec = next(self.out.glob('AuthorLock_RD1-QA_PRIVATE_*.txt'))
        self.run_tool('preflight', '--repo', self.repo, '--file', temp, '--receipt', rec)
        source.write_bytes(source.read_bytes() + b'X')
        self.run_tool('preflight', '--repo', self.repo, '--file', temp, '--receipt', rec,
                      ok=False)

    def test_three_locked_sources_zip_and_bad_member(self):
        pairs = [self.make_public(n) for n in (1, 2, 3)]
        args = ['bundle', '--repo', str(self.repo), '--files',
                *[str(f) for f, r in pairs], '--receipts',
                *[str(r) for f, r in pairs], '--output', str(self.out / 'Temp_three.zip')]
        self.run_tool(*args)
        import zipfile
        with zipfile.ZipFile(self.out / 'Temp_three.zip') as z:
            self.assertIsNone(z.testzip())
            self.assertEqual(len(z.namelist()), 3)
        pairs[1][0].write_bytes(pairs[1][0].read_bytes() + b'1')
        self.run_tool(*args, ok=False)

    def test_report_bad_filename_is_rejected(self):
        review, receipt = self.make_public()
        d = dict(line.split(': ', 1) for line in receipt.read_text().splitlines()
                 if ': ' in line)
        names = ['REVIEW_PACKET_ID', 'REVIEW_FILE_BASENAME',
                 'REVIEW_SOURCE_FIRST_LINE', 'REVIEW_SOURCE_LAST_LINE']
        good = self.out / 'reviewer_good.txt'
        good.write_text(''.join(f'{n}: {d[n]}\n' for n in names))
        bad = self.out / 'reviewer_bad.txt'
        bad.write_text(good.read_text().replace(review.name, 'Temp_wrong.md'))
        self.run_tool('check-report', '--receipt', receipt, '--report', good)
        self.run_tool('check-report', '--receipt', receipt, '--report', bad, ok=False)


if __name__ == '__main__':
    unittest.main()
