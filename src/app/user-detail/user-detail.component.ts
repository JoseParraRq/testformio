import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/userInterface';
import { FormsService } from '../services/forms.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id:number;
  userId:User;
  formRegister:any={};
  testformName='testform';
  submissionData:any={data:{}};
  options: Object = {
    submitMessage: '',
    disableAlerts: true,
    noAlerts: true
  };
  constructor(
    public userService:UserServiceService,
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
    let user = this.userService.getUserById(this.id).subscribe((data)=>{
        
      console.log("respuesta de la api FormById",data);
          let array:any[]=[];
          array.push(data);
          const map = array.map((x)=>{
            return{
              user:x.user
            }
          });
          console.log("here the maaaappp",map);
          
          for(var w =0;w<map.length;w++){
            var elementw= map[w];
          }
        console.log("here the elementoooo",elementw.user[0]);
        this.userId = {
          id:elementw.user[0].id,
          firstname:elementw.user[0].firstname,
          surname:elementw.user[0].surname,
          email:elementw.user[0].email,
          city:elementw.user[0].name_city,
          address:elementw.user[0].address          
        }
        //   id:elementw.user[0].id,
        console.log("her ethe test",elementw.user[0].id);
        
        console.log("here the userId",this.userId);
        
          // let parser = JSON.parse(elementw.form[0].content);
        // console.log("here the parser",parser);
        
      //   this.form = parser;
        
      //   // this.form = elementw.form[0].content;
  
      //   console.log("this is the formparser",this.form);
      //  console.log(typeof(this.form));
    
    })
      }
 
}
