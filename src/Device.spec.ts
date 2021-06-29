import { Device } from './Device';

declare const global: any;

describe('Device', () => {
  beforeEach(() => {
    global.window = undefined;
    global.navigator = undefined;
  });
  describe('isServer', () => {
    it('서버일 때 true 리턴', () => {
      expect(Device.isServer()).toBeTruthy();
    });
    it('클라이언트일 때 false 리턴', () => {
      global.window = 'Chrome';
      expect(Device.isServer()).toBeFalsy();
    });
  });
  describe('isClient', () => {
    it('서버일 때 false 리턴', () => {
      expect(Device.isClient()).toBeFalsy();
    });
    it('클라이언트일 때 true 리턴', () => {
      global.window = 'Chrome';
      expect(Device.isClient()).toBeTruthy();
    });
  });
  describe('isMobileWeb', () => {
    it('서버일 때 false 리턴', () => {
      expect(Device.isMobileWeb()).toBeFalsy();
    });
    it('모바일웹일 때 true 리턴', () => {
      global.window = 'Chrome';
      global.navigator = { userAgent: 'iphone' };
      expect(Device.isMobileWeb()).toBeTruthy();
    });
    it('모바일웹이 아닐 때 false 리턴', () => {
      global.window = 'Chrome';
      global.navigator = { userAgent: 'zalgo' };
      expect(Device.isMobileWeb()).toBeFalsy();
    });
  });
  describe('isMacOS', () => {
    it('서버일 때 false 리턴', () => {
      expect(Device.isMacOS()).toBeFalsy();
    });
    it('MacOS일 때 true 리턴', () => {
      global.window = 'Chrome';
      global.navigator = { platform: 'Macintosh' };
      expect(Device.isMacOS()).toBeTruthy();
    });
  });
  describe('isIE', () => {
    it('서버일 때 false 리턴', () => {
      expect(Device.isIE()).toBeFalsy();
    });
    it('IE일 때 true 리턴', () => {
      global.window = {
        navigator: {
          userAgent: 'MSIE',
        },
      };
      expect(Device.isIE()).toBeTruthy();
    });
  });
  describe('getOSByUserAgent', () => {
    it('서버일 때 false 리턴', () => {
      expect(Device.getOSByUserAgent()).toBeFalsy();
    });
    it('iOS', () => {
      global.window = {
        navigator: {
          userAgent: 'iphone',
        },
      };
      expect(Device.getOSByUserAgent()).toEqual('ios');
    });
    it('Android', () => {
      global.window = {
        navigator: {
          userAgent: 'Android',
        },
      };
      expect(Device.getOSByUserAgent()).toEqual('android');
    });
    it('Web', () => {
      global.window = {
        navigator: {
          userAgent: 'chrom',
        },
      };
      expect(Device.getOSByUserAgent()).toEqual('web');
    });
  });
});
