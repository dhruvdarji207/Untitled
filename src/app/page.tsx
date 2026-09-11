import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container page-space">
      <section className="hero">
        <div>
          <span className="eyebrow">CYBERSECURITY LEARNING LAB</span>
          <h1>Learn the weakness. Then learn the fix.</h1>
          <p>
            SecureLab is a local, preset-only simulator for understanding SQL injection and cross-site scripting without touching real websites, hosts, or accounts.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/sql-lab">Open SQL Injection lab</Link>
            <Link className="button secondary" href="/xss-lab">Open XSS lab</Link>
          </div>
        </div>
        <div className="terminal-card" aria-label="SecureLab safety summary">
          <div className="terminal-dots"><span></span><span></span><span></span></div>
          <pre>{`scope: local demo only\ninputs: preset scenarios\ntargets: none\nnetwork attacks: disabled\nlesson: vulnerable → secure`}</pre>
        </div>
      </section>

      <section className="grid three">
        <article className="card"><h2>1. Observe</h2><p>See how unsafe string handling creates a dangerous data path.</p></article>
        <article className="card"><h2>2. Compare</h2><p>Switch to the secure implementation and compare the exact construction step.</p></article>
        <article className="card"><h2>3. Check</h2><p>Complete a short quiz to confirm you understand the defensive pattern.</p></article>
      </section>

      <section className="notice safe-note">
        <strong>Safety boundary:</strong> SecureLab has no field for domains, IPs, database connection strings, shells, or arbitrary attack payloads.
      </section>
    </div>
  );
}
