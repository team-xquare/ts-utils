import {
  replaceAllFunctionDowngrade,
  replaceAllFunctionInit,
} from './replaceAll';

describe('replaceAll', () => {
  it('상위브라우저에서 replaceAll 작동', () => {
    const p =
      'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
    replaceAllFunctionInit();
    p.replaceAll('dog', 'monkey');
    expect(p.replaceAll('dog', 'monkey')).toEqual(
      'The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?'
    );
  });
  it('하위브라우저에서 replaceAll 작동', () => {
    const p =
      'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
    replaceAllFunctionDowngrade();
    p.replaceAll('dog', 'monkey');
    expect(p.replaceAll('dog', 'monkey')).toEqual(
      'The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?'
    );
  });
});
