/**
 * 足し算を行う関数
 * @param a 最初の数値
 * @param b 2番目の数値
 * @returns 2つの数値の合計
 */
export function add(a: number, b: number): number {
  return a + b;
}

// 使用例
if (require.main === module) {
  const num1 = 5;
  const num2 = 7;
  const result = add(num1, num2);
  console.log(`${num1} + ${num2} = ${result}`);
}
