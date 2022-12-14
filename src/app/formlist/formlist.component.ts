import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '../interfaces/formInterface';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.scss']
})
export class FormlistComponent implements OnInit {
  form:Form[]= [];
  formById:Form;
  /* "table": "user",
   "nameForm":"UserRegistration",
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
       "type": "button",
       "label": "Submit",
       "key": "submit",
       "size": "md",
       "block": false,
       "action": "submit",
       "disableOnInvalid": true,
       "theme": "primary",
       "input": true,
       "placeholder": "",
       "prefix": "",
       "customClass": "",
       "suffix": "",
       "multiple": false,
       "defaultValue": null,
       "protected": false,
       "unique": false,
       "persistent": false,
       "hidden": false,
       "clearOnHide": true,
       "refreshOn": "",
       "redrawOn": "",
       "tableView": false,
       "modalEdit": false,
       "dataGridLabel": true,
       "labelPosition": "top",
       "description": "",
       "errorLabel": "",
       "tooltip": "",
       "hideLabel": false,
       "tabindex": "",
       "disabled": false,
       "autofocus": false,
       "dbIndex": false,
       "customDefaultValue": "",
       "calculateValue": "",
       "calculateServer": false,
       "widget": {
         "type": "input"
       },
       "attributes": {},
       "validateOn": "change",
       "validate": {
         "required": false,
         "custom": "",
         "customPrivate": false,
         "strictDateValidation": false,
         "multiple": false,
         "unique": false
       },
       "conditional": {
         "show": null,
         "when": null,
         "eq": ""
       },
       "overlay": {
         "style": "",
         "left": "",
         "top": "",
         "width": "",
         "height": ""
       },
       "allowCalculateOverride": false,
       "encrypted": false,
       "showCharCount": false,
       "showWordCount": false,
       "properties": {},
       "allowMultipleMasks": false,
       "addons": [],
       "leftIcon": "",
       "rightIcon": "",
       "id": "esk9a65"
     }
   ]
 }*/
 constructor(
   public formService:FormsService,
   public router:Router
 ) { 

 }
  ngOnInit(): void {
    // let formData = JSON.stringify(this.form,null,4);
    this.formService.getAllForms().subscribe(
      res=>{
        let array:any[]=[];
        let array1:any[]=[];
        console.log("res in formlist com???onent",res);
      // this.router.navigate(['builder'])
      array.push(res);
      const map = array.map((x)=>{
        return{
forms:x.forms
        }
      });
console.log("here the amppp",map);

for(var i=0;i<map.length;i++){
var element = map[i];
array1.push(element);
}
console.log("here the element into the array 1",element.forms);
this.form = element.forms;
    },
    err=>console.error(err)    
    )

  }

  getAllForms():void{
    // let formData = JSON.stringify(this.form,null,4);
    this.formService.getAllForms().subscribe(
      res=>{
        let array:any[]=[];
        let array1:any[]=[];
        console.log("res in formlist com???onent",res);
      // this.router.navigate(['builder'])
      array.push(res);
      const map = array.map((x)=>{
        return{
forms:x.forms
        }
      });
console.log("here the amppp",map);

for(var i=0;i<map.length;i++){
var element = map[i];
array1.push(element);
}
console.log("here the element into the array 1",element.forms);
this.form = element.forms;
    },
    err=>console.error(err)    
    )

  }

}
