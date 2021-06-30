/**
 * Date 타입의 두 변수의 날짜의 차이를 객체로 반환합니다.
 * @param sourceDate 비교될 날짜
 * @param targetDate 비교할 날짜
 */
export declare function getDateDifference(
  sourceDate: Date,
  targetDate: Date
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
