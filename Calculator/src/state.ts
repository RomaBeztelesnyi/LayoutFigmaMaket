export type Operator = '+' | '-' | 'x' | '÷' | '%' | '+/-' | '√' | 'xⁿ' | null;

export type State = {
  x: string;
  y: string;
  operator: Operator;
  finish: boolean;
};

export const state: State = {
  x: '',
  y: '',
  operator: null,
  finish: false,
};