// I dont need to directly interact with model or repositroy as service will do it for us
const {CityService, CityService} = require('../services/index');
//last function to be called is the controller
//controller is the one which will interact with the user   
//controller will call the service
// rest all things will be middlewares
//After all controllers are function only
const cityService=new CityService();
const create=async(req,res)=>{
    try {
        const city=await CityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            sucess:true,
            message:'Sucessfully created a City',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Something Went Wrong',
            err:error
        })
    }
}
const destroy=async (req,res)=>{
    try {
        const city=await CityService.createCity(req.params.id);
        return res.status(200).json({
            data:response,
            sucess:true,
            message:'Sucessfully created a City',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to delete the city',
            err:error
        })
    }
}

//Patch-> /City/id->
const update=async (req,res)=>{
    try {
        const city=await CityService.createCity(req.params.id,req.body);
        return res.status(201).json({
            data:city,
            sucess:true,
            message:'Sucessfully created a City',
            err:{}
        })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data:{},
                sucess:false,
                message:'Not able to Update the city',
                err:error
             })
    }
}

const get=async (req,res) =>{
    try {
        const city=await CityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            sucess:true,
            message:'Sucessfully fetched a City',
            err:{}
    });
 } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to delete the city',
            err:error
        }) 
    }
}