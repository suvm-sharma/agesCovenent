const fs = require('fs');
const Tesseract = require('tesseract.js');
const Jimp = require('jimp');

Jimp.read('https://i.ibb.co/jTKYQqP/Captcha-United.png', (err, data) => {
  if (err) throw err;
  data
    .resize(256, 256) // resize
    .quality(40) // set JPEG quality
    .greyscale() // set greyscale
    .write('captcha-img.jpg'); // save
});

Tesseract.recognize('./captcha-img.jpg', 'eng').then(({ data: { text } }) => {
  console.log(text);
});
