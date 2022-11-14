import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../interfaces/formInterface';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit {
formById:Form;
id:number;
form:any={};
updateForm:any={};
// elform:any={
//   "title": "My Test Form",
//   "components": [
//       {
//           "type": "textfield",
//           "input": true,
//           "tableView": true,
//           "inputType": "text",
//           "inputMask": "",
//           "label": "First Name",
//           "key": "firstName",
//           "placeholder": "Enter your first name",
//           "prefix": "",
//           "suffix": "",
//           "multiple": false,
//           "defaultValue": "",
//           "protected": false,
//           "unique": false,
//           "persistent": true,
//           "validate": {
//               "required": true,
//               "minLength": 2,
//               "maxLength": 10,
//               "pattern": "",
//               "custom": "",
//               "customPrivate": false
//           },
//           "conditional": {
//               "show": "",
//               "when": null,
//               "eq": ""
//           }
//       },
//       {
//           "type": "textfield",
//           "input": true,
//           "tableView": true,
//           "inputType": "text",
//           "inputMask": "",
//           "label": "Last Name",
//           "key": "lastName",
//           "placeholder": "Enter your last name",
//           "prefix": "",
//           "suffix": "",
//           "multiple": false,
//           "defaultValue": "",
//           "protected": false,
//           "unique": false,
//           "persistent": true,
//           "validate": {
//               "required": true,
//               "minLength": 2,
//               "maxLength": 10,
//               "pattern": "",
//               "custom": "",
//               "customPrivate": false
//           },
//           "conditional": {
//               "show": "",
//               "when": null,
//               "eq": ""
//           }
//       },
//       {
//           "input": true,
//           "label": "Submit",
//           "tableView": false,
//           "key": "submit",
//           "size": "md",
//           "leftIcon": "",
//           "rightIcon": "",
//           "block": false,
//           "action": "submit",
//           "disableOnInvalid": true,
//           "theme": "primary",
//           "type": "button"
//       }
//   ]
// }
options: Object = {
  submitMessage: '',
  disableAlerts: true,
  noAlerts: true
};
submissionData:any={data:{}};
  constructor(
   public formService:FormsService,
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
        
        this.form = parser;
  
        console.log("this is the formparser",this.form);
       console.log(typeof(this.form));
    }
  });
}

}
