import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormioAuthService } from '@formio/angular/auth';
import { AuthComponent } from '../auth/auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( 
              public auth:AuthComponent,
              public router:Router) { }
  ngOnInit(): void {
  }

login(){
  this.router.navigate(['auth/login'])
}

register(){
  this.router.navigate(['auth/register']);
}

createForm(){
  this.router.navigate(['builder']);
}
}
