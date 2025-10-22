export function safeNumber(s: string): number {
  return s === '' ? 0 : parseFloat(s);
}

export function computeFromValues(operator: string | null, xStr: string, yStr: string): string {
  const a = safeNumber(xStr);
  const b = safeNumber(yStr || xStr);
  let res = 0;
  switch (operator) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case 'x': res = a * b; break;
    case '÷':
      if (b === 0) throw new Error('DivisionByZero');
      res = a / b;
      break;
    case '%': res = (a * b) / 100; break;
    case 'xⁿ': res = Math.pow(a, b); break;
    default: res = a;
  }
  return String(res);
}

export function computeSqrt(operand: string): string {
  const n = safeNumber(operand);
  if (n < 0) throw new Error('InvalidInput');
  return String(Math.sqrt(n));
}