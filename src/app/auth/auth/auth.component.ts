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
  public submit: SubmitEvent;

  formLogin: any = {};
  formRegister: any = {};
  //  id:number;
  loginFormName: string = 'Login';
  registerFormName: string = 'userRegistration';

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
    let formioLogin = this.formService.getFormByName(this.loginFormName).subscribe((data) => {

      console.log("respuesta de la api FormById", data);
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

        this.formLogin = parser;

        // this.form = elementw.form[0].content;

        console.log("this is the formparser", this.formLogin);
        console.log(typeof (this.formLogin));

      }
    });

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
  }

  login() {
    try {
      console.log("the submit in login is here");
      console.log(this.submissionData);
      let userLogin = {
        email: this.submissionData.data.email,
        password: this.submissionData.data.password
      }
      this.userService.login(userLogin).subscribe((data) => {

        console.log("respuesta de la api FormRegister", data);
        let array = [];
        array.push(data);
        const map = array.map((x) => {
          return {
            login: x.login
          }
        });
        for (var i = 0; i < map.length; i++) {
          var element = map[i];
        }
        console.log("here the element", element);

        if (element.login === undefined || element.login === null) {

          throw Error("bad request bad email or password");
        }
        this.router.navigate(['/'])
      });
    } catch (error) {
      console.log("here the error in the login");
      throw Error(error);
    }
  }

  register() {
    console.log("the submit in register is here");
    console.log(this.submissionData);
    //  console.log("here the info util",this.submissionData.data.password);
    let user: User = {
      firstname: this.submissionData.data.firstname,
      surname: this.submissionData.data.surname,
      email: this.submissionData.data.email,
      password: this.submissionData.data.password,
      address: this.submissionData.data.address,
      cities_id: this.submissionData.data.cities_id,
      city: this.submissionData.data.city
    }

    console.log("her ethe user form submision data", user);

    this.userService.createUser(user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['user/list'])
      },
      err => console.error(err)
    )
    // this.router.navigate(['/']);

  }
}