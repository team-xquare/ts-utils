import { delay } from './delay';

describe('delay', () => {
  it('delay(3000)은 3초를 기다린다', async () => {
    const time1: number = +new Date();
    await delay(3000);
    const time2: number = +new Date();
    expect(time2 - time1).toBeGreaterThanOrEqual(3000);
  });
});
