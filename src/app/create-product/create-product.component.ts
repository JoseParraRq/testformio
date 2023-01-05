import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interfaces/productInterface';
import { FormsService } from '../services/forms.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
 public submit :SubmitEvent;
 tableTest='tableTest';
//  createProductFormName='productRegistration'
// product:Product;
  submissionData:any={data:{}};
form:any={};
  options: Object = {
    submitMessage: '',
    disableAlerts: true,
    noAlerts: true
  };
  constructor( 
    public router:Router,
    public formService:FormsService,
    public productService:ProductServiceService
    ) { }

  ngOnInit(): void {
    let formioProduct = this.formService.getFormByName(this.tableTest).subscribe((data)=>{

    // let formioProduct = this.formService.getFormByName(this.createProductFormName).subscribe((data)=>{
        
        console.log("respuesta de la api FormById",data);
            let array:any[]=[];
            array.push(data);
            const map = array.map((x)=>{
              return{
                formName:x.formName
              }
            });
            for(var w =0;w<map.length;w++){
          var elementw= map[w];
          let parser = JSON.parse(elementw.formName[0].content);
          console.log("here the parser",parser);
          
          this.form = parser;
          
          // this.form = elementw.form[0].content;
    
          console.log("this is the formparser",this.form);
         console.log(typeof(this.form));
         
            }
          });
  }

  createProduct(){
    console.log("the submit is here");
    console.log(this.submissionData);
    let product:Product={
        product_name:this.submissionData.data.product_name,
        product_category:this.submissionData.data.product_category,
        created_by:this.submissionData.data.created_by,
        quantity:this.submissionData.data.quantity
    }
    console.log("here the product front before",product);
    
    this.productService.createProduct(product).subscribe(
        res=>{
        console.log(res);
        this.router.navigate(['/'])
      },
      err=>console.error(err)    
      ) 
  }
}
