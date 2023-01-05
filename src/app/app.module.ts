import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormioModule} from '@formio/angular';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'

import { FormioAppConfig } from '@formio/angular';
import { RouterModule } from '@angular/router';
import { FormioAuthConfig, FormioAuthService } from '@formio/angular/auth';

import { CreateProductComponent } from './create-product/create-product.component';
import { BuilderComponent } from './builder/builder.component'


import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsService } from './services/forms.service';
import { AuthComponent } from './auth/auth/auth.component';
import { FormlistComponent } from './formlist/formlist.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserServiceService } from './services/user-service.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MasterDetailFormComponent } from './master-detail-form/master-detail-form.component';
import { ConTercerosComponent } from './con-terceros/con-terceros.component';
import { ConTercerosListComponent } from './con-terceros-list/con-terceros-list.component';
import { TercerosDetailComponent } from './terceros-detail/terceros-detail.component';
import { UpdateTercerosComponent } from './update-terceros/update-terceros.component';
@NgModule({
  declarations: [
    AppComponent,  
    HeaderComponent,
    HomeComponent,
    CreateProductComponent,
    BuilderComponent,
    AuthComponent,
    FormlistComponent,
    FormDetailComponent,
    UserlistComponent,
    UserDetailComponent,
    EditUserComponent,
    ProductDetailComponent,
    EditFormComponent,
    EditProductComponent,
    MasterDetailFormComponent,
    MasterDetailFormComponent,
    ConTercerosComponent,
    ConTercerosListComponent,
    TercerosDetailComponent,
    UpdateTercerosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    FormsModule,
    HttpClientModule
    
  ],
  exports:[],
  providers: [
    AuthComponent,
    BuilderComponent,
    FormsService,
    UserServiceService//final adition
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



