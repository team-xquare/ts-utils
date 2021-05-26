declare const global: unknown;
declare const window: any;
declare const navigator: any;
export class Device{
    public static isServer() {
        return typeof window === 'undefined' && typeof global !== 'undefined';
    }
    
    public static isClient() {
        return !this.isServer();
    }

    public static isMobileWeb() {
        if (this.isServer()) {
            return false;
        }
        if (navigator.userAgent.match(/ipad|iphone/i) !== null || navigator.userAgent.match(/Android/i) !== null) {
            return true;
        }
        return false;
    }
    
    public static isMacOS() {
        if (this.isServer()) {
            return false;
        }
        return navigator.platform.match(/Macintosh|MacIntel|MacPPC|Mac68K/);
    }
    
    public static isIE() {
        if (this.isServer()) {
            return false;
        }
        return /MSIE|Trident/i.test(window.navigator.userAgent);
    }
    
    public static getOSByUserAgent() {
        if (this.isServer()) {
            return false;
        }
        const isIos = window.navigator.userAgent.match(/ipad|iphone/i) !== null;
        if (isIos) {
            return 'ios';
        }
        const isAndroid = window.navigator.userAgent.match(/Android/i) !== null;
        if (isAndroid) {
            return 'android';
        }
        return 'web';
    }
    
}
