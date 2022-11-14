import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/productInterface';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id:number;
  product:Product;
  formRegister:any={};
  submissionData:any={data:{}};
  options: Object = {
    submitMessage: '',
    disableAlerts: true,
    noAlerts: true
  };
  constructor(
    public productService:ProductServiceService,
    public activatedRoute:ActivatedRoute
  ) { 
    let idObject = this.activatedRoute.snapshot.url;
    
    for(var i=0; i<idObject.length;i++){
      var element = idObject[i];
      let enteroId = new Number(element.path);    
      this.id = enteroId.valueOf();
      console.log("this is the idddd",this.id);
       //segunda forma de traer el id que se me ocurrio viendo las propiedades
  }
  }

  ngOnInit(): void {
    let user = this.productService.getProductById(this.id).subscribe((data)=>{
        
      console.log("respuesta de la api FormById",data);
          let array:any[]=[];
          array.push(data);
          const map = array.map((x)=>{
            return{
              product:x.product
            }
          });
          console.log("here the maaaappp",map);
          
          for(var w =0;w<map.length;w++){
            var elementw= map[w];
          }
        console.log("here the elementoooo",elementw.product[0]);
        this.product=elementw.product[0];
        
    })
      }

}
