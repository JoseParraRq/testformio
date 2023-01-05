import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/userInterface';
import { FormsService } from '../services/forms.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-master-detail-form',
  templateUrl: './master-detail-form.component.html',
  styleUrls: ['./master-detail-form.component.scss']
})
export class MasterDetailFormComponent implements OnInit {
  public submit: SubmitEvent;
  user:any[]= [];
  
  formRegister: any = {};
  //  id:number;
  registerFormName: string = 'uRMasterDetail';
  
  submissionData: any = { data: {} };

  options: Object = {
    submitMessage: '',
    disableAlerts: true,
    noAlerts: true
  };
  constructor(
    public formService: FormsService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public userService: UserServiceService
  ) {

  }

  ngOnInit(): void {
  
    let formioRegister = this.formService.getFormByName(this.registerFormName).subscribe((data) => {

      console.log("respuesta de la api FormRegister", data);
      let array: any[] = [];
      array.push(data);
      const map = array.map((x) => {
        return {
          formName: x.formName
        }
      });
      for (var w = 0; w < map.length; w++) {
        var elementw = map[w];
        let parser = JSON.parse(elementw.formName[0].content);
        console.log("here the parser", parser);

        this.formRegister = parser;

        // this.form = elementw.form[0].content;

        console.log("this is the formparser", this.formRegister);
        console.log(typeof (this.formRegister));

      }
    });

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
    
  register() {
    console.log("the submit in register is here");
    console.log(this.submissionData);
  //  console.log("here the form values in tree and edit grind",this.submissionData.data.userRegistration[0].tree.data);
  //  console.log("here the firstname in tree and edit grind",this.submissionData.data.userRegistration[0].tree.data.firstname);
   
    let userRegister:User={
      firstname:this.submissionData.data.firstname,
      surname:this.submissionData.data.surname,
      email:this.submissionData.data.email,
      password:this.submissionData.data.password,
      address:this.submissionData.data.address,
      cities_id:this.submissionData.data.cities_id,
    }
 
    console.log("here the submission data buiding User",userRegister);
    
    this.userService.createUser(userRegister).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['user/list'])
      },
      err => console.error(err)
    )
    this.router.navigate(['/']);

  }

}
