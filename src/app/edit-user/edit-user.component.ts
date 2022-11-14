import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/userInterface';
import { FormsService } from '../services/forms.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  name='userRegistration';
  form:any={};
  id:number;
  userUpdate:any;
  userById:User;
  submissionData:any={data:{}};
 
   options: Object = {
     submitMessage: '',
     disableAlerts: true,
     noAlerts: true
   };

  constructor(
    public formService:FormsService,
    public activatedRoute:ActivatedRoute,
    public userService:UserServiceService,
    public router:Router
    ) { 
      let idObject = this.activatedRoute.snapshot.url;
    
    for(var i=0; i<idObject.length;i++){
      var element = idObject[i];
      let enteroId = new Number(element.path);    
      this.id = enteroId.valueOf();
      // console.log("this is the idddd",this.id);
    }
  }

  ngOnInit(): void {
    let formioRegister = this.formService.getFormByName(this.name).subscribe((data)=>{
        
      // console.log("respuesta de la api FormRegister",data);
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
        // console.log("here the parser",parser);
        
        this.form = parser;
              
        // this.form = elementw.form[0].content;
  
        // console.log("this is the formparser",this.form);
      //  console.log(typeof(this.form));
              
          }
        });
      }
update(){
  console.log("the submit in update is here");
  console.log(this.submissionData);
  let userTest = this.userService.getUserById(this.id).subscribe((data)=>{
        
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
        this.userById = {
          id:elementw.user[0].id,
          firstname:elementw.user[0].firstname,
          surname:elementw.user[0].surname,
          email:elementw.user[0].email,
          city:elementw.user[0].name_city,
          address:elementw.user[0].address          
        }
        //   id:elementw.user[0].id,
        console.log("her ethe test",elementw.user[0].id);
        
        console.log("here the userId",this.userById);
        
    });
    this.userUpdate= {
      userId:this.id,
      firstname:this.submissionData.data.firstname,
      surname:this.submissionData.data.surname,
      email:this.submissionData.data.email,
      password:this.submissionData.data.password,
      address:this.submissionData.data.address,
      cities_id:this.submissionData.data.cities_id
        }  
  let user = this.userService.updateUser(this.userUpdate).subscribe((data)=>{
    console.log("here the data in updateservice",this.userUpdate);
        
    console.log("respuesta de la api FormById",data);
        // let array:any[]=[];
        // array.push(data);
        // const map = array.map((x)=>{
        //   return{
        //     user:x.user
        //   }
        // });
        // console.log("here the maaaappp",map);
        
        // for(var w =0;w<map.length;w++){
        //   var elementw= map[w];
        // }    
        // // let idObject = this.activatedRoute.snapshot.url;
    
        // for(var i=0; i<idObject.length;i++){
        //   var elemento = idObject[i];
        //   let enteroId = new Number(elemento.path);    
        // }
        var idUrl = this.id; //segunda forma de traer el id que se me ocurrio viendo las propiedades
        this.router.navigate([`/user/detail/${idUrl}`]);
      })
}
}
