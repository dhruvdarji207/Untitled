export type LabMode = 'vulnerable' | 'secure';
export type SqlScenario = 'normal' | 'always-true';
export type XssScenario = 'plain-text' | 'script-tag';

export const USERS = [
  { username: 'alice', role: 'Student' },
  { username: 'bob', role: 'Mentor' },
  { username: 'charlie', role: 'Reviewer' },
] as const;

export const SQL_SCENARIOS: Record<SqlScenario, { label: string; username: string; password: string }> = {
  normal: { label: 'Normal login', username: 'alice', password: 'demo123' },
  'always-true': { label: 'Always true', username: "' OR '1'='1", password: "' OR '1'='1" },
};

export const XSS_SCENARIOS: Record<XssScenario, { label: string; input: string }> = {
  'plain-text': { label: 'Plain text', input: 'Hello from SecureLab!' },
  'script-tag': { label: 'Script tag', input: "<script>document.body.insertAdjacentText('beforeend',' [preset script executed]')</script>Demo script" },
};

export function buildSqlPreview(mode: LabMode, scenario: SqlScenario) {
  const sample = SQL_SCENARIOS[scenario];

  if (mode === 'secure') {
    return {
      query: 'SELECT username, role FROM users WHERE username = ? AND password = ?',
      parameters: [sample.username, sample.password],
      result: scenario === 'normal' ? USERS[0] : null,
      explanation: 'Values are bound as data. They cannot change the SQL structure.',
    };
  }

  const query = `SELECT username, role FROM users WHERE username = '${sample.username}' AND password = '${sample.password}'`;
  return {
    query,
    parameters: [],
    result: scenario === 'normal' ? USERS[0] : USERS[0],
    explanation:
      scenario === 'always-true'
        ? 'The preset changes the condition so it becomes true. This is a classroom simulation only.'
        : 'The values are concatenated directly into the query string, which is unsafe design.',
  };
}

export function encodeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
