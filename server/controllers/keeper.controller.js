const { Keeper } = require("../models/keeper.model");
const unggah = require('unggah');

const storage = unggah.s3({
    endpoint: 's3.ap-southeast-1.amazonaws.com',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucketName: 'pawfectsitter',
    rename: (req, file) => {
      return `${Date.now()}-${file.originalname}`  // this is the default
    }
  })

  const upload = unggah({
    limits: {
      fileSize: 1e6 // in bytes
    },
    storage// storage configuration for google cloud storage or S3
})

class KeeperController {    

    static async getAllKeepers(req,res,next) {
        try {
            let keepers = await Keeper.find({});
            res.status(200).json(keepers);
        } catch (error) {
            next(error)
        }
    }

    static async createKeeper(req,res,next) {
        try {

           const {name,email,image,rating,skills,status,address} = req.body;
           const newObj = {name,email,image,rating:Number(rating),skills,status,address};


           let keeper = new Keeper(newObj);
           await keeper.save();
           res.status(201).json(keeper);

        } catch (error) {
            next(error)
        }
    }

}

module.exports = KeeperController