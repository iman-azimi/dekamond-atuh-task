export function isValidIranMobile(input: string): boolean {
  const normalized = input.trim();
  // Allowed: 09xxxxxxxxx | +989xxxxxxxxx | 00989xxxxxxxxx
  const patterns = [
    /^09\d{9}$/,
    /^\+989\d{9}$/,
    /^00989\d{9}$/
  ];
  return patterns.some((p) => p.test(normalized));
}

export function formatToStandard(input: string): string {
  const s = input.trim();
  if (/^09\d{9}$/.test(s)) return '+98' + s.substring(1);
  if (/^\+989\d{9}$/.test(s)) return s;
  if (/^00989\d{9}$/.test(s)) return '+' + s.substring(2);
  return s;
}
