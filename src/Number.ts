/**
 * 숫자를 3자라씩 구분해줍니다
 * @param num
 * @param separator
 */
export function separate(
  num: number | string,
  separator: string = ','
): string {
  return num
    .toString()
    .split('')
    .reverse()
    .reduce((pv: string, cv: string, i: number, a: string[]) =>
      (i + 1) % 3 !== 0 || i + 1 === a.length ? pv + cv : pv + cv + separator
    )
    .split('')
    .reverse()
    .join('');
}
