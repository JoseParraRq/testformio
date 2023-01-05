import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from '../services/forms.service';
import { TercerosServiceService } from '../services/terceros-service.service';

@Component({
  selector: 'app-con-terceros',
  templateUrl: './con-terceros.component.html',
  styleUrls: ['./con-terceros.component.scss']
})
export class ConTercerosComponent implements OnInit {
  public submit :SubmitEvent;
  formName='registerTerceros';
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
     public tercerosService:TercerosServiceService
     ) { }
 
   ngOnInit(): void {
     let formioProduct = this.formService.getFormByName(this.formName).subscribe((data)=>{
 
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
     this.tercerosService.createTerceros(this.submissionData).subscribe(
         res=>{
         console.log(res);
         this.router.navigate(['terceros/list'])
       },
       err=>console.error(err)    
       ) 
   }
}
