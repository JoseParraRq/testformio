import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  server = "http://localhost:3000";
  user:User;
  
  constructor(
    private serviceUser:HttpClient
  ) {

   }

   createUser(user:User){
    return this.serviceUser.post(`${this.server}/createUser`,user);
  }

  getAllUsers(){
    return this.serviceUser.get(`${this.server}/getAllUsers`);
  }
  getUserById(id:number){
    let body={
      userId:id
          };
    return this.serviceUser.post(`${this.server}/getUserById`,body);
  }

  updateUser(obj:any){
    
    return this.serviceUser.put(`${this.server}/updateUser`,obj);
  }

  login(login:any){
    return this.serviceUser.post(`${this.server}/login`,login)
  }

}
