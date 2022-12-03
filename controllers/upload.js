require('dotenv').config()

// uploading images to cloudinary
const UploadImages = async (req,res,next)=>{
  console.log(req.body)
    try {
        cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRETAPI 
  });



cloudinary.v2.uploader.upload(req.body,
  { public_id: "profile" }, 
  function(error, result) {console.log(
    res.send(result)
  ); });
    } catch (error) {
        next(error)
    }
}

module.exports = {UploadImages}