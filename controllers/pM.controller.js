const User = require('../models/device');
const { use } = require('../routes/device');

exports.deviceFinder =(req,res,next) =>{
    try{
        const reqBody = req.body
        const deviceId = req.params.Id 
        const pMValue = req.params.pM
        User.findOne({device_id: deviceId ,pM:pMValue })
        .then(device =>{
            if(!device){
                const error = new Error("Device not found with this device Id");
                error.statusCode = 422;
                throw error;
            }

            res.status(200).json({message:device})
        })
    }
    catch(err){
        next()
        console.log(err)
    }
    }


    

