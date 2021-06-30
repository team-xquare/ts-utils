import { getDateDifference } from './Date';

describe('getDateDifference', () => {
  let startDate: Date;
  let endDate: Date;
  beforeEach(() => {
    startDate = new Date();
    endDate = new Date();
  });
  it('같은 날짜', () => {
    endDate = startDate;
    const difference = getDateDifference(endDate, startDate);
    expect(Object.values(difference)).toEqual([0, 0, 0, 0]);
  });
  it('3초 뒤', async () => {
    startDate.setSeconds(1);
    endDate.setSeconds(4);
    const difference = getDateDifference(endDate, startDate);
    expect(difference.seconds).toEqual(3);
  });
  it('3분 뒤', async () => {
    startDate.setMinutes(1);
    endDate.setMinutes(4);
    const difference = getDateDifference(endDate, startDate);
    expect(difference.minutes).toEqual(3);
  });
  it('3시간 뒤', async () => {
    startDate.setHours(1);
    endDate.setHours(4);
    const difference = getDateDifference(endDate, startDate);
    expect(difference.hours).toEqual(3);
  });
  it('3일 뒤', async () => {
    startDate.setDate(1);
    endDate.setDate(4);
    const difference = getDateDifference(endDate, startDate);
    expect(difference.days).toEqual(3);
  });
});
