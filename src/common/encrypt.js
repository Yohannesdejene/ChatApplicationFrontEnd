import CryptoJS from "crypto-js";
const key = import.meta.env.VITE_CRYPTO_ENCRYPTION_KEY;

export const Encrypt = (data) => {
  var encryptedData = CryptoJS.AES.encrypt(data, key).toString();
  return encryptedData;
};
export const Decrypt = (encryptedData) => {
  var decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key);

  var decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);

  return decryptedData;
};
