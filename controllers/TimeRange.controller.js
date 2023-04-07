const User = require('../models/device');
const { use } = require('../routes/timerange.route');

exports.timeFinder =(req,res,next) =>{
    try{
        const reqBody = req.body
        const start = req.params.start 
        const end = req.params.end
        User.find({
            createdAt :{
                $gte : start ,
                $lte: end
            }
        })
        .then(data =>{
            if(!data){
                const error = new Error("Not data found for the given time range");
                error.statusCode = 422;
                throw error;
            }

            res.status(200).json({message:data})
        })
    }
    catch(err){
        next()
        console.log(err)
    }
    }


    

