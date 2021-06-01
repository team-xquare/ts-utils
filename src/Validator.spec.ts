import { Validator } from './Validator';
describe('Validator', () => {
  describe('isEmailValid', () => {
    it('return `true` 케이스', () => {
      expect(Validator.isEmailValid('eungyeole@xquare.com')).toEqual(true);
    });
    it('should return `false` 케이스', () => {
      expect(Validator.isEmailValid('')).toEqual(false);
      expect(Validator.isEmailValid('eungyeole')).toEqual(false);
      expect(Validator.isEmailValid('1234')).toEqual(false);
      expect(Validator.isEmailValid('eungyeole@')).toEqual(false);
      expect(Validator.isEmailValid('eungyeole@xquare')).toEqual(false);
      expect(Validator.isEmailValid('eungyeole@xquare.')).toEqual(false);
      expect(Validator.isEmailValid('eungyeole@xquare.123')).toEqual(false);
      expect(Validator.isEmailValid('eungyeole@xquare.com123')).toEqual(false);
    });
  });
  describe('isGradeValid', () => {
    it('return `true` 케이스', () => {
      expect(Validator.isGradeValid('2411', 2)).toEqual(true);
    });
    it('teturn `false` 케이스', () => {
      expect(Validator.isGradeValid('2411', 1)).toEqual(false);
      expect(Validator.isGradeValid('2411', 3)).toEqual(false);
    });
  });
});
