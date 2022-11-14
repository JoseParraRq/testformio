import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  server = "http://localhost:3000";
  product:Product;
  
  constructor(
    private serviceProduct:HttpClient
  ) {

   }

   createProduct(product:Product){
    return this.serviceProduct.post(`${this.server}/createProduct`,product);
  }

  getAllProducts(){
    return this.serviceProduct.get(`${this.server}/getAllProducts`);
  }

  getProductById(id:number){
    let body={
      productId:id
          };
    return this.serviceProduct.post(`${this.server}/getProductById`,body);
  }

  // updateUser(obj:any){
    
  //   return this.serviceUser.put(`${this.server}/updateUser`,obj);
  // }

}
