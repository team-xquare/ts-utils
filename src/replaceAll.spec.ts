import {
  replaceAll,
  replaceAllFunctionDowngrade,
  replaceAllFunctionInit,
} from './replaceAll';

describe('replaceAll', () => {
  const p: string =
    'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
  const searchValue: string = 'dog';
  const replaceValue: string = 'monkey';
  const expectValue: string =
    'The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?';
  let $replaceAll;
  beforeAll(() => {
    $replaceAll = String.prototype.replaceAll;
  });
  beforeEach(() => {
    String.prototype.replaceAll = $replaceAll;
  });
  it('상위브라우저에서 replaceAll 작동', () => {
    expect(String.prototype.replaceAll.toString()).toEqual(
      $replaceAll.toString()
    );
    expect(p.replaceAll(searchValue, replaceValue)).toEqual(expectValue);
  });
  it('하위브라우저에서 replaceAll 작동', () => {
    replaceAllFunctionDowngrade();
    expect(String.prototype.replaceAll.toString()).toEqual(
      replaceAll.toString()
    );
    expect(p.replaceAll(searchValue, replaceValue)).toEqual(expectValue);
  });
  describe('replaceAllFunctionInit', () => {
    it('상위브라우저에서 replaceAll 작동', () => {
      replaceAllFunctionInit();
      expect(String.prototype.replaceAll.toString()).toEqual(
        $replaceAll.toString()
      );
      expect(p.replaceAll(searchValue, replaceValue)).toEqual(expectValue);
    });
    it('하위브라우저에서 replaceAll 작동', () => {
      String.prototype.replaceAll = undefined;
      replaceAllFunctionInit();
      expect(String.prototype.replaceAll.toString()).toEqual(
        replaceAll.toString()
      );
      expect(p.replaceAll(searchValue, replaceValue)).toEqual(expectValue);
    });
  });
});
