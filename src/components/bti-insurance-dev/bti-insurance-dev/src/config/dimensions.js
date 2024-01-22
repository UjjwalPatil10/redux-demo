const isServer = typeof window === "undefined";

export const isBrowser = !isServer;
export const windowHeight = !isServer ? window.innerHeight : 768;
export const windowWidth = !isServer ? window.innerWidth : 1268;
export const isMobilePad = !isServer ? window.innerWidth < 959 : false;
export const isMobile = !isServer ? window.innerWidth < 580 : false;
export const isSafari = false;
