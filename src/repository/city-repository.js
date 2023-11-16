const {City}=require('../models/index');

//or we can include index file

//In the index file it return all the corresponding model you will put in the model folder


class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }
        catch(error){
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }

    async deleteCity(CityId){
        try{
            await City.destroy(
                {where:{id:cityId}}//key as where
                );
        }
        catch(error){
            throw error;
        }
    }

    async updateCity(cityId,data){
         try{
          const city=await City.update(data,{
            where:{id:cityId}
          })
         }
         catch(error){
             throw error;
         }
    }

    async getCity(cityId){
        try{
           const city=await City.findOne({where:{id:cityId}})
           return city;
        }
        catch(error){
            throw error;
        }
    }
}

module.exports=CityRepository;