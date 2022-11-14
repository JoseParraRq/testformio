import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:any[]= [];
  constructor(
    public productService:ProductServiceService,
    public router:Router
  ) { 
 
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      res=>{
        let array:any[]=[];
        let array1:any[]=[];
        console.log("res from api comṕonent",res);
        array.push(res);
      const map = array.map((x)=>{
        return{
products:x.products
        }
      });
console.log("here the amppp",map);
   
for(var i=0;i<map.length;i++){
var element = map[i];
}
console.log("here the element into the array 1",element.products);
this.products = element.products;   
      })
    }
  }


