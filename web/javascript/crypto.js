
// 字符串类型的key用之前需要用uft8先parse一下才能用 由于Java就是按照128bit给的，但是由于是一个字符串，需要先在前端将其转为128bit的才行
var key = CryptoJS.enc.Utf8.parse(keyStr);

// 加密
var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
});

// 由于CryptoJS生成的密文是一个对象，如果直接将其转为字符串是一个Base64编码过的，在encryptedData.ciphertext上的属性转为字符串才是后端需要的格式。

var encryptedBase64Str = encryptedData.toString();
// 输出：'RJcecVhTqCHHnlibzTypzuDvG8kjWC+ot8JuxWVdLgY='
console.log(encryptedBase64Str);

// 需要读取encryptedData上的ciphertext.toString()才能拿到跟Java一样的密文
var encryptedStr = encryptedData.ciphertext.toString();
// 输出：'44971e715853a821c79e589bcd3ca9cee0ef1bc923582fa8b7c26ec5655d2e06'
console.log(encryptedStr);

// 由于加密后的密文为128位的字符串，那么解密时，需要将其转为Base64编码的格式。
// 那么就需要先使用方法CryptoJS.enc.Hex.parse转为十六进制，再使用CryptoJS.enc.Base64.stringify将其变为Base64编码的字符串，
// 此时才可以传入CryptoJS.AES.decrypt方法中对其进行解密。

// 拿到字符串类型的密文需要先将其用Hex方法parse一下
var encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedStr);

// 将密文转为Base64的字符串
// 只有Base64类型的字符串密文才能对其进行解密
var encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);

// 解密
var decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
});

// 解密后，需要按照Utf8的方式将明文转位字符串
var decryptedStr = decryptedData.toString(CryptoJS.enc.Utf8);
console.log(decryptedStr); // 'aaaaaaaaaaaaaaaa'