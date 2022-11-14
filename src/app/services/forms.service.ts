import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '../interfaces/formInterface';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  server = "http://localhost:3000";
  form:Form;
  
  constructor(
    private serviceForm:HttpClient
  ) {

   }

  createForm(form:any){
    let table = form.table;
    let content = form;
    let title = form.title;

    console.log("her ethe table",table);
    
    let formtest={
      table_asociated:table,
      name_form:title,
      content:content
    }
    return this.serviceForm.post(`${this.server}/createForm`,formtest);
  }

  getAllForms(){
    return this.serviceForm.get(`${this.server}/getAllForms`);
  }

  getFormById(id:number){
    let body={
formId:id
    };
      return this.serviceForm.post(`${this.server}/getFormById`,body)
  }

  getFormByName(name:string){
    let body={
formName:name
    };
      return this.serviceForm.post(`${this.server}/getFormByName`,body)
  }

  updateForm(form:any){
    let table = form.table;
    let content = form;
    let title = form.title;

    console.log("her ethe table",table);
    
    let formtest={
      table_asociated:table,
      name_form:title,
      content:content
    }
    console.log("in serevice for service fromtmf",form);
    
    return this.serviceForm.put(`${this.server}/updateForm`,formtest);
  }
  }
