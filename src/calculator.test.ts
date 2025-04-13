import { add } from './calculator';

describe('Calculator', () => {
  test('正の数の足し算', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('負の数の足し算', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('正と負の足し算', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('0との足し算', () => {
    expect(add(7, 0)).toBe(7);
  });
});
