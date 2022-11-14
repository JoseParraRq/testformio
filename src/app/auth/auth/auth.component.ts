import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/userInterface';
import { FormsService } from 'src/app/services/forms.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public submit :SubmitEvent;
  /*form:any= {
     "table": "user",
     "components": [
         {
             "label": "nombre",
             "labelPosition": "top",
             "placeholder": "",
             "description": "",
             "tooltip": "",
             "prefix": "",
             "suffix": "",
             "widget": {
                 "type": "input"
             },
             "inputMask": "",
             "displayMask": "",
             "allowMultipleMasks": false,
             "customClass": "",
             "tabindex": "",
             "autocomplete": "",
             "hidden": false,
             "hideLabel": false,
             "showWordCount": false,
             "showCharCount": false,
             "mask": false,
             "autofocus": false,
             "spellcheck": true,
             "disabled": false,
             "tableView": true,
             "modalEdit": false,
             "multiple": false,
             "defaultValue": "",
             "persistent": true,
             "inputFormat": "plain",
             "protected": false,
             "dbIndex": false,
             "case": "",
             "truncateMultipleSpaces": false,
             "encrypted": false,
             "redrawOn": "",
             "clearOnHide": true,
             "customDefaultValue": "",
             "calculateValue": "",
             "calculateServer": false,
             "allowCalculateOverride": false,
             "validateOn": "change",
             "validate": {
                 "required": false,
                 "pattern": "",
                 "customMessage": "",
                 "custom": "",
                 "customPrivate": false,
                 "json": "",
                 "minLength": "",
                 "maxLength": "",
                 "strictDateValidation": false,
                 "multiple": false,
                 "unique": false
             },
             "unique": false,
             "errorLabel": "",
             "errors": "",
             "key": "nameuser",
             "tags": [],
             "properties": {},
             "conditional": {
                 "show": null,
                 "when": null,
                 "eq": "",
                 "json": ""
             },
             "customConditional": "",
             "logic": [],
             "attributes": {},
             "overlay": {
                 "style": "",
                 "page": "",
                 "left": "",
                 "top": "",
                 "width": "",
                 "height": ""
             },
             "type": "textfield",
             "input": true,
             "refreshOn": "",
             "dataGridLabel": false,
             "addons": [],
             "inputType": "text",
             "id": "ej6bt2n"
         },
         {
             "label": "apellidos",
             "labelPosition": "top",
             "placeholder": "",
             "description": "",
             "tooltip": "",
             "prefix": "",
             "suffix": "",
             "widget": {
                 "type": "input"
             },
             "inputMask": "",
             "displayMask": "",
             "allowMultipleMasks": false,
             "customClass": "",
             "tabindex": "",
             "autocomplete": "",
             "hidden": false,
             "hideLabel": false,
             "showWordCount": false,
             "showCharCount": false,
             "mask": false,
             "autofocus": false,
             "spellcheck": true,
             "disabled": false,
             "tableView": true,
             "modalEdit": false,
             "multiple": false,
             "defaultValue": "",
             "persistent": true,
             "inputFormat": "plain",
             "protected": false,
             "dbIndex": false,
             "case": "",
             "truncateMultipleSpaces": false,
             "encrypted": false,
             "redrawOn": "",
             "clearOnHide": true,
             "customDefaultValue": "",
             "calculateValue": "",
             "calculateServer": false,
             "allowCalculateOverride": false,
             "validateOn": "change",
             "validate": {
                 "required": false,
                 "pattern": "",
                 "customMessage": "",
                 "custom": "",
                 "customPrivate": false,
                 "json": "",
                 "minLength": "",
                 "maxLength": "",
                 "strictDateValidation": false,
                 "multiple": false,
                 "unique": false
             },
             "unique": false,
             "errorLabel": "",
             "errors": "",
             "key": "lastname",
             "tags": [],
             "properties": {},
             "conditional": {
                 "show": null,
                 "when": null,
                 "eq": "",
                 "json": ""
             },
             "customConditional": "",
             "logic": [],
             "attributes": {},
             "overlay": {
                 "style": "",
                 "page": "",
                 "left": "",
                 "top": "",
                 "width": "",
                 "height": ""
             },
             "type": "textfield",
             "input": true,
             "refreshOn": "",
             "dataGridLabel": false,
             "addons": [],
             "inputType": "text",
             "id": "e36cdta"
         },
         {
             "label": "Guardar",
             "action": "submit",
             "showValidations": false,
             "theme": "primary",
             "size": "md",
             "block": false,
             "leftIcon": "",
             "rightIcon": "",
             "shortcut": "",
             "description": "",
             "tooltip": "",
             "customClass": "",
             "tabindex": "",
             "disableOnInvalid": true,
             "hidden": false,
             "autofocus": false,
             "disabled": false,
             "tableView": false,
             "modalEdit": false,
             "key": "submit",
             "tags": [],
             "properties": {},
             "conditional": {
                 "show": null,
                 "when": null,
                 "eq": "",
                 "json": ""
             },
             "customConditional": "",
             "logic": [],
             "attributes": {},
             "overlay": {
                 "style": "",
                 "page": "",
                 "left": "",
                 "top": "",
                 "width": "",
                 "height": ""
             },
             "type": "button",
             "input": true,
             "placeholder": "",
             "prefix": "",
             "suffix": "",
             "multiple": false,
             "defaultValue": null,
             "protected": false,
             "unique": false,
             "persistent": false,
             "clearOnHide": true,
             "refreshOn": "",
             "redrawOn": "",
             "dataGridLabel": true,
             "labelPosition": "top",
             "errorLabel": "",
             "hideLabel": false,
             "dbIndex": false,
             "customDefaultValue": "",
             "calculateValue": "",
             "calculateServer": false,
             "widget": {
                 "type": "input"
             },
             "validateOn": "change",
             "validate": {
                 "required": false,
                 "custom": "",
                 "customPrivate": false,
                 "strictDateValidation": false,
                 "multiple": false,
                 "unique": false
             },
             "allowCalculateOverride": false,
             "encrypted": false,
             "showCharCount": false,
             "showWordCount": false,
             "allowMultipleMasks": false,
             "addons": [],
             "id": "ediqcsq",
             "saveOnEnter": false
         }
     ]
 }*/// faltaria consultar el formulario por id a la tabla de formularios y traer ese formulario y pintarlo en la vista // form:any;
 formLogin:any={};  
 formRegister:any={};  
//  id:number;
loginFormName:string='Login';
registerFormName:string='userRegistration';

submissionData:any={data:{}};
 
   options: Object = {
     submitMessage: '',
     disableAlerts: true,
     noAlerts: true
   };
   constructor(
    public formService:FormsService,
    public activatedRoute:ActivatedRoute,
    public router:Router,
    public userService:UserServiceService
     ) { 
 
     }

  ngOnInit(): void {
    let formioLogin = this.formService.getFormByName(this.loginFormName).subscribe((data)=>{
        
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
          
          this.formLogin = parser;
          
          // this.form = elementw.form[0].content;
    
          console.log("this is the formparser",this.formLogin);
         console.log(typeof(this.formLogin));
         
            }
          });  

          let formioRegister = this.formService.getFormByName(this.registerFormName).subscribe((data)=>{
        
            console.log("respuesta de la api FormRegister",data);
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
              
              this.formRegister = parser;
              
              // this.form = elementw.form[0].content;
        
              console.log("this is the formparser",this.formRegister);
             console.log(typeof(this.formRegister));
             
                }
              });  
}
  login(){
   
    console.log("the submit in login is here");
    console.log(this.submissionData);    
    // this.router.navigate(['/']);
   }

   register(){
    console.log("the submit in register is here");
    console.log(this.submissionData);
  //  console.log("here the info util",this.submissionData.data.password);
  let user:User = {
firstname:this.submissionData.data.firstname,
surname:this.submissionData.data.surname,
email:this.submissionData.data.email,
password:this.submissionData.data.password,
address:this.submissionData.data.address,
cities_id:this.submissionData.data.cities_id,
city:this.submissionData.data.city
  }
   
  console.log("her ethe user form submision data",user);
  
    this.userService.createUser(user).subscribe(
      res=>{
      console.log(res);
      this.router.navigate(['user/list'])
    },
    err=>console.error(err)    
    )
    // this.router.navigate(['/']);
 
  }
}