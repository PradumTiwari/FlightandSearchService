const {Flights}=require('../models/index');
const {Op}=require('sequelize');


class FlightRepository{


    async createFlight(data){
        try{
            const flight=await Flights.create(data);
        return flight;
        }
        catch(error){
            console.log("Something went wrong in repository Layer");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight=await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something Went Wrong In repository  layer ");
        }
    }
    
    async getAllFlight(filter){
        try {
            
            const flight=await Flights.findAll(
                {
                    where:filter
                }
            );
            return flight;
        } catch (error) {
            console.log("Something Went Wrong In  repository  layer");
        }
    }
    
}

module.exports=FlightRepository;

/*
{
    where:{
        arrivalAirportId:2,
        departureAirportId:4,
        price:{[Op.gte]:4000}
    }
}


*/