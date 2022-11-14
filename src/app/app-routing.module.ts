import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { BuilderComponent } from './builder/builder.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { FormlistComponent } from './formlist/formlist.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'createProduct',
    pathMatch:'full',
    component:CreateProductComponent
  },
  {
    path:'builder',
    pathMatch:'full',
    component:BuilderComponent
  },
  {
    path:'auth/login',
    pathMatch:'full',
    component:AuthComponent
  },
  {
    path:'auth/register',
    pathMatch:'full',
    component:AuthComponent
  },
  {
    path:'form/list',
    pathMatch:'full',
    component:FormlistComponent
  },
  {
    path:'form/detail/:id',
    pathMatch:'full',
    component:FormDetailComponent
  },
  {
    path:'user/list',
    pathMatch:'full',
    component:UserlistComponent
  },
  {
    path:'user/detail/:id',
    pathMatch:'full',
    component:UserDetailComponent
  },
  {
    path:'user/update/:id',
    pathMatch:'full',
    component:EditUserComponent
  },
  {
    path:'product/create',
    pathMatch:'full',
    component:CreateProductComponent
  },
  {
    path:'product/detail/:id',
    pathMatch:'full',
    component:ProductDetailComponent
  },
  {
    path:'form/update/:id',
    pathMatch:'full',
    component:EditFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
