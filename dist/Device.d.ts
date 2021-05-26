declare class Device {
  static isServer(): boolean;
  static isClient(): boolean;
  static isMobileWeb(): boolean;
  static isMacOS(): boolean;
  static isIE(): boolean;
  static getOSByUserAgent(): boolean;
}