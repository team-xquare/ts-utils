import produce from 'immer';

/**
 * Date 타입의 두 변수의 날짜의 차이를 객체로 반환합니다.
 * @param sourceDate 비교될 날짜
 * @param targetDate 비교할 날짜
 */
export function getDateDifference(sourceDate: Date, targetDate: Date) {
  const difference = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const sourceTime: number = sourceDate.getTime();
  const targetTime: number = targetDate.getTime();
  const differenceTime: number = sourceTime - targetTime;

  if (differenceTime <= 0) {
    return difference;
  }

  const SECOND_TO_MS = 1000;
  const MINUTE_TO_MS = 1000 * 60;
  const HOUR_TO_MS = 1000 * 60 * 60;
  const DAY_TO_MS = 1000 * 60 * 60 * 24;

  return produce(difference, (draft) => {
    draft.days = Math.floor(differenceTime / DAY_TO_MS);
    draft.hours = Math.floor((differenceTime % DAY_TO_MS) / HOUR_TO_MS);
    draft.minutes = Math.floor((differenceTime % HOUR_TO_MS) / MINUTE_TO_MS);
    draft.seconds = Math.floor((differenceTime % MINUTE_TO_MS) / SECOND_TO_MS);
  });
}
