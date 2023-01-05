import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TercerosServiceService {
  server = "http://localhost:3000";
  
  
  constructor(
    private serviceUser:HttpClient
  ) {

   }

   createTerceros(terceros){
    return this.serviceUser.post(`${this.server}/createTerceros`,terceros);
  }
  getAllTerceros(){
    return this.serviceUser.get(`${this.server}/getAllTerceros`);
  }

  getAllTercerosForList(){
    return this.serviceUser.get(`${this.server}/getAllTercerosForList`);
  }

  getOneTercerosForDetail(id:number){
    let body={
      tercerosId:id
          };

    return this.serviceUser.post(`${this.server}/getOneTercerosForDetail`,body);
  }

  getOneTerceros(id:number){
    let body={
      tercerosId:id
          };

    return this.serviceUser.post(`${this.server}/getOneTerceros`,body);
  }

  updateTerceros(obj:any){
    
    return this.serviceUser.put(`${this.server}/updateTerceros`,obj);
  }

  deleteTerceros(id:number){
    let body={
      tercerosId:id
          };
    return this.serviceUser.post(`${this.server}/deleteTerceros`,body);
  }
}
