//Name of the File : image-resize-sharp.js
const sharp = require('sharp');
const fs = require('fs');

sharp('./public/dist/social_image.jpg')
    .rotate(180)
    .resize(200)
    .toBuffer()
    .then( data => {
        fs.writeFileSync('./public/dist/social_image_180x200.jpg', data);
    })
    .catch( err => {
        console.log(err);
    });			

  // sharp('input.jpg')
  // .rotate()
  // .resize(200)
  // .toBuffer()
  // .then( data => { console.log(data) })
  // .catch( err => { console.log(err) });
