import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../services/forms.service';
import {Form} from '../interfaces/formInterface';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  formById:Form;
  id:number;
  form:any={};
  // formUpdate={};
  options: Object = {
    submitMessage: '',
    disableAlerts: true,
    noAlerts: true
  };
  submissionData:any={data:{}};
    constructor(
     public formService:FormsService,
     public activatedRoute:ActivatedRoute,
     public router:Router
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
    
     let formio = this.formService.getFormById(this.id).subscribe((data)=>{
          
      console.log("respuesta de la api FormById",data);
          let array:any[]=[];
          array.push(data);
          const map = array.map((x)=>{
            return{
              form:x.form
            }
          });
          for(var w =0;w<map.length;w++){
        var elementw= map[w];
        let parser = JSON.parse(elementw.form[0].content);
        console.log("here the parser",parser);
        console.log(
  "here the test pro",
          elementw.form[0].id
        );
        this.form = parser;
       
        console.log("this is the formparser",this.form);
       console.log(typeof(this.form));
       
          }
        });
      }  

       updates(){
        console.log("the submit is here");
        console.log("here the form in frontt",this.form);
         this.form.id = this.id;
         console.log("here the idddddd",this.form);
         
          this.formService.updateForm(this.form).subscribe(
            res=>{
            console.log(res);
            var idUrl = this.id; //segunda forma de traer el id que se me ocurrio viendo las propiedades
        this.router.navigate([`/form/detail/${idUrl}`]);
          },
          err=>console.error(err)    
          )
        }
}
