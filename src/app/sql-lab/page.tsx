'use client';

import { useMemo, useState } from 'react';
import { ModeToggle } from '@/components/ModeToggle';
import { buildSqlPreview, SQL_SCENARIOS, type LabMode, type SqlScenario } from '@/lib/lab-scenarios';

export default function SqlLabPage() {
  const [mode, setMode] = useState<LabMode>('vulnerable');
  const [scenario, setScenario] = useState<SqlScenario>('normal');
  const preview = useMemo(() => buildSqlPreview(mode, scenario), [mode, scenario]);

  return (
    <div className="container page-space">
      <div className="page-heading">
        <span className="eyebrow">LAB 01</span>
        <h1>SQL Injection</h1>
        <p>Compare string concatenation with parameterized queries using two fixed classroom scenarios.</p>
      </div>

      <section className="lab-toolbar card">
        <div><span className="label">Mode</span><ModeToggle mode={mode} onChange={setMode} /></div>
        <div>
          <span className="label">Scenario</span>
          <div className="chips">
            {(Object.keys(SQL_SCENARIOS) as SqlScenario[]).map((key) => (
              <button className={scenario === key ? 'chip active' : 'chip'} key={key} onClick={() => setScenario(key)}>
                {SQL_SCENARIOS[key].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid two">
        <article className="card">
          <h2>Input</h2>
          <dl className="kv">
            <div><dt>Username</dt><dd><code>{SQL_SCENARIOS[scenario].username}</code></dd></div>
            <div><dt>Password</dt><dd><code>{SQL_SCENARIOS[scenario].password}</code></dd></div>
          </dl>
          <p className="muted">Inputs are predefined. This lab does not accept arbitrary SQL.</p>
        </article>
        <article className="card">
          <h2>{mode === 'secure' ? 'Parameterized query' : 'Constructed query'}</h2>
          <pre className="codebox"><code>{preview.query}</code></pre>
          {preview.parameters.length > 0 && <p><strong>Bound values:</strong> {JSON.stringify(preview.parameters)}</p>}
        </article>
      </section>

      <section className={`notice ${mode === 'secure' ? 'safe-note' : 'danger-note'}`}>
        <strong>{mode === 'secure' ? 'Why this is safer: ' : 'What goes wrong: '}</strong>{preview.explanation}
      </section>

      <section className="flow card">
        <h2>Data flow</h2>
        <div className="flow-row">
          <span>Preset input</span><b>→</b><span className={mode === 'vulnerable' ? 'flow-hot' : ''}>Query construction</span><b>→</b><span>Demo result</span>
        </div>
        <p className="muted">Result shown: {preview.result ? `${preview.result.username} (${preview.result.role})` : 'No authenticated user'}</p>
      </section>
    </div>
  );
}
