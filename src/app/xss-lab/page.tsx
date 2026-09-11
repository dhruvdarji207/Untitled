'use client';

import { useMemo, useState } from 'react';
import { ModeToggle } from '@/components/ModeToggle';
import { encodeHtml, XSS_SCENARIOS, type LabMode, type XssScenario } from '@/lib/lab-scenarios';

export default function XssLabPage() {
  const [mode, setMode] = useState<LabMode>('vulnerable');
  const [scenario, setScenario] = useState<XssScenario>('plain-text');
  const input = XSS_SCENARIOS[scenario].input;

  const srcDoc = useMemo(() => {
    const shown = mode === 'secure' ? encodeHtml(input) : input;
    return `<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'"><style>body{font-family:system-ui;padding:18px;background:#fff;color:#111}code{white-space:pre-wrap}</style></head><body><div id="output">${shown}</div></body></html>`;
  }, [input, mode]);

  return (
    <div className="container page-space">
      <div className="page-heading">
        <span className="eyebrow">LAB 02</span>
        <h1>Cross-Site Scripting (XSS)</h1>
        <p>See the difference between treating content as HTML and encoding it as text inside a sandboxed preview.</p>
      </div>

      <section className="lab-toolbar card">
        <div><span className="label">Mode</span><ModeToggle mode={mode} onChange={setMode} /></div>
        <div>
          <span className="label">Scenario</span>
          <div className="chips">
            {(Object.keys(XSS_SCENARIOS) as XssScenario[]).map((key) => (
              <button className={scenario === key ? 'chip active' : 'chip'} key={key} onClick={() => setScenario(key)}>
                {XSS_SCENARIOS[key].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid two">
        <article className="card">
          <h2>Preset content</h2>
          <pre className="codebox"><code>{input}</code></pre>
          <p className="muted">No arbitrary URL or payload field is provided.</p>
        </article>
        <article className="card">
          <h2>Sandboxed preview</h2>
          <iframe title="XSS classroom sandbox" sandbox="allow-scripts" className="sandbox-frame" srcDoc={srcDoc} />
        </article>
      </section>

      <section className={`notice ${mode === 'secure' ? 'safe-note' : 'danger-note'}`}>
        <strong>{mode === 'secure' ? 'Protection: ' : 'Problem: '}</strong>
        {mode === 'secure'
          ? 'The content is HTML-encoded before rendering, so markup is displayed as text instead of being interpreted.'
          : 'Untrusted content is inserted as HTML. The preset script can execute, but only inside this isolated iframe.'}
      </section>
    </div>
  );
}
