export declare class Device {
  static isServer(): boolean;
  static isClient(): boolean;
  static isMobileWeb(): boolean;
  static isMacOS(): any;
  static isIE(): boolean;
  static getOSByUserAgent(): false | 'ios' | 'android' | 'web';
}
