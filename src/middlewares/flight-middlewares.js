import { ClientErrorCodes } from "../utils/error-codes";}

const validateCreateFlight=(req,res,next)=>{
    if(!req.body.flightNumber || !req.body.airplaneId || !req.body.departureAirportId || !req.body.arrivalAirportId || !req.body.arrivalTime || !req.body.departureTime || !req.body.price ){

        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            sucess:false,
            message:"All fields are required",
            err:"Missing Mandatory Properties to Create a Flight"
        })
    }
    next();
}

module.exports={ 
    validateCreateFlight
  }