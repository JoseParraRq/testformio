import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/userInterface';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  user:any[]= [];
  constructor(
    public userService:UserServiceService,
    public router:Router
  ) { 
 
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      res=>{
        let array:any[]=[];
        let array1:any[]=[];
        console.log("res from api comṕonent",res);
        array.push(res);
      const map = array.map((x)=>{
        return{
users:x.users
        }
      });
console.log("here the amppp",map);
   
for(var i=0;i<map.length;i++){
var element = map[i];
array1.push(element);
}
console.log("here the element into the array 1",element.users);
this.user = element.users;   
      })
    }
  }
     