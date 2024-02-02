const AirportService=require('../services/airport-service');

const airportService=new AirportService();

const create=async(req,res,next)=>{ 
    try{
    const response=await airportService.create(req.body);
    return res.status(SuccessCodes.CREATED).json({
        message:"Airport created successfully",
        error:{},
        data:response,
        success:true
    })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
          data:{},
          success:false,
          error:err,
            message:"Error while creating new  airport"
        });
    }
}


module.exports={
    create
}