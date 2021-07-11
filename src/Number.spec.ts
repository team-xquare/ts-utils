import { separate } from './Number';

describe('Number', () => {
  describe('separate', () => {
    it('1자리 숫자일 경우 구분자 없음', () => {
      const num: number = 1;
      expect(separate(num)).toEqual('1');
    });
    it('2자리 숫자일 경우 구분자 없음', () => {
      const num: number = 10;
      expect(separate(num)).toEqual('10');
    });
    it('3자리 숫자일 경우 구분자 없음', () => {
      const num: number = 100;
      expect(separate(num)).toEqual('100');
    });
    it('4, 7, 10자리 숫자일 경우 1,000-', () => {
      const num: number = 1000;
      expect(separate(num)).toEqual('1,000');
    });
    it('5, 8, 11자리 숫자일 경우 10,000-', () => {
      const num: number = 10000;
      expect(separate(num)).toEqual('10,000');
    });
    it('6, 9, 12자리 숫자일 경우 100,000-', () => {
      const num: number = 100000;
      expect(separate(num)).toEqual('100,000');
    });
    it('구분자 .', () => {
      const num: number = 100000;
      expect(separate(num, '.')).toEqual('100.000');
    });
  });
});
