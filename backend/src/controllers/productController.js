const {ProductLogic} = require('./../logic/productLogic');

class ProductController{
    
    
    async createProduct(req,res){
        try {
            
            let product={
                "product_name":req.body.product_name,
                "product_category":req.body.product_category,
                "created_by":req.body.created_by
            }
            console.log("here the product before",product);
            let productInto = await new ProductLogic().createProductLogic(product);
        } catch (error) {
            console.log(error);
        }
        return res.json({message:"successful request"});
    }

    async getAllProducts(req,res){
        try {
            var products = await new ProductLogic().getAllProductsLogic();
            console.log("here the users in the controller",products);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json({products});//"successful request"
      
    }

   async getProductById(req,res){
        try {
            var product = await new ProductLogic().getProductById(req.body);
            console.log("her ethe forms in the controller",product);
        } catch (error) {
            console.log("here the error in the get all forms",error);
        }
        return res.json({product});
    }
  
    async updateUser(req,res){
        try {
            var userUpdate = await new UserLogic().updateUser(req.body);
            console.log("her ethe forms in the controller",userUpdate);
        } catch (error) {
            console.log("here the error in the get all forms",error);
        }
        return res.json({userUpdate});
    }
  
}


module.exports = { ProductController };