import Link from 'next/link';

const links = [
  ['/', 'Home'],
  ['/sql-lab', 'SQL Lab'],
  ['/xss-lab', 'XSS Lab'],
  ['/quiz', 'Quiz'],
] as const;

export function SiteNav() {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link className="brand" href="/">SecureLab</Link>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
