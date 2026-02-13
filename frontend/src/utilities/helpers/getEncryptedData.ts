const CryptoJS = require('crypto-js');

const text = process.env.API_SECRET_MESSAGE || 'Hello, World!';
const key = CryptoJS.enc.Latin1.parse(
  process.env.API_SECRET_KEY || 'API_SECRET_KEY'
);
const iv = CryptoJS.enc.Latin1.parse(process.env.API_IV || 'API_IV');

export function getEncryptedData(): string {
  const encrypted = CryptoJS.AES.encrypt(text, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  });
  return encrypted.toString(); // Return Base64 encoded string
}
