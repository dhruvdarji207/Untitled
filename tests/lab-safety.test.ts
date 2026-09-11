import { describe, expect, it } from 'vitest';
import { buildSqlPreview, encodeHtml, SQL_SCENARIOS, XSS_SCENARIOS } from '@/lib/lab-scenarios';

describe('SecureLab safety helpers', () => {
  it('uses a fixed SQL scenario allowlist', () => {
    expect(Object.keys(SQL_SCENARIOS)).toEqual(['normal', 'always-true']);
  });

  it('uses a fixed XSS scenario allowlist', () => {
    expect(Object.keys(XSS_SCENARIOS)).toEqual(['plain-text', 'script-tag']);
  });

  it('parameterizes the secure SQL preview', () => {
    const demo = buildSqlPreview('secure', 'always-true');
    expect(demo.query).toContain('?');
    expect(demo.parameters).toHaveLength(2);
  });

  it('encodes HTML special characters', () => {
    expect(encodeHtml('<script>')).toBe('&lt;script&gt;');
  });
});
