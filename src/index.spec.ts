import * as MyLib from './index';

describe('MyLib', () => {
  it('should have exports', () => {
    expect(typeof MyLib).toEqual('object');
  });
  it('should not have undefined exports', () => {
    Object.keys(MyLib).forEach((exportKey) =>
      expect(MyLib[exportKey]).toBeDefined()
    );
  });
});
