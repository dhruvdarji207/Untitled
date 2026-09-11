'use client';

import type { LabMode } from '@/lib/lab-scenarios';

export function ModeToggle({ mode, onChange }: { mode: LabMode; onChange: (mode: LabMode) => void }) {
  return (
    <div className="segmented" aria-label="Lab mode">
      <button className={mode === 'vulnerable' ? 'active danger' : ''} onClick={() => onChange('vulnerable')}>
        Vulnerable
      </button>
      <button className={mode === 'secure' ? 'active safe' : ''} onClick={() => onChange('secure')}>
        Secure
      </button>
    </div>
  );
}
