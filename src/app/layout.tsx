import type { Metadata } from 'next';
import './globals.css';
import { SiteNav } from '@/components/SiteNav';

export const metadata: Metadata = {
  title: 'SecureLab',
  description: 'Safe, local cybersecurity learning demos for SQL injection and XSS.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <main>{children}</main>
        <footer className="footer">
          <div className="container">SecureLab • Educational presets only • No real targets</div>
        </footer>
      </body>
    </html>
  );
}
