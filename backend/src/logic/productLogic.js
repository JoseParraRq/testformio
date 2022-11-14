const bd = require('./../db')
class ProductLogic{

  async createProductLogic(product) {
    await bd('products').insert(product)
        .then( function (result) {
            console.log("successful",product);     // respond back to request
         })
}

async getAllProductsLogic() {
  try {
    
    console.log("here the list forms in backend");
    var products = await bd.raw('select p.id,p.product_name,c.name_category, u.email from products as p join product_category as c join user as u  on created_by=u.id;');
    // var forms = await bd.select('id, name_form, table_asociated ').table('form');
        //  console.log("her ethe result in response",forms);
        console.log("here the forms in back query",products[0]);

  } catch (error) {
    console.log(error);
  }
  return products[0]; 
}

async getProductById(productId){
  try {
    let array = [];
    array.push(productId);
 

     var product = await bd.raw('select p.id,p.product_name,c.name_category,p.quantity, u.email from products as p join product_category as c on product_category=c.id join user as u on created_by=u.id where p.id=?;',[array[0].productId]);

         console.log("here the forms in back query",product[0]);
//  select u.id,u.firstname,u.surname,u.address, city.name_city  from user as u join cities as city on cities_id=city.id;
   } catch (error) {
     console.log(error);
   }
   return product[0];   
}

async updateUser(user){
  try {
    let array = [];
    array.push(user);
 console.log("her ethe user in back",user);
     console.log("here the list forms in backend",array[0].userId);
 let id=array[0].userId;
 let firstname=array[0].firstname;
 let surname=array[0].surname;
 let email=array[0].email;
 let password=array[0].password;
 let cities_id=array[0].cities_id;
 let address=array[0].address;

     var userUpdate = await bd.raw('update user set firstname=?,surname=?,email=?,password=?,address=?,cities_id=? where id=?;',[firstname,surname,email,password,address,cities_id,id]);
        
    } catch (error) {
     console.log(error);
   }
   return user;   
}
}

module.exports={ProductLogic}