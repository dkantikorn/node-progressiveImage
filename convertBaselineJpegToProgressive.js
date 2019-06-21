const sharp = require("sharp");
const image = sharp("./public/dist/social_image.jpg");
image
  .jpeg({
    progressive: true,
    quality: 90
  })
  .toFile(
    "./public/dist/progressive-social_image.jpg",
    (err, success) => {
      if(err){
        console.log('===  process error ===');
        console.log(error);
      }

      if(success){
        console.log('===  success for process ===');
      }
    }
  );


  // sharp('input.jpg')
  // .rotate()
  // .resize(200)
  // .toBuffer()
  // .then( data => { console.log(data) })
  // .catch( err => { console.log(err) });
