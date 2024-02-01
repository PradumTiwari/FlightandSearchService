

class CrudService{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try {
            const response=this.repository.create(data);
            return response;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async destroy(id){
        try {
            const response=this.repository.destroy(id);
            return response;

        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async get(id){
        try {
            const response=this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async getAll(){
        try {
            const response=this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async update(){
        try {
            const response=this.repository.update(id,data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
}

module.exports=CrudService;