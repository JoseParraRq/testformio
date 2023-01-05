import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { BuilderComponent } from './builder/builder.component';
import { ConTercerosListComponent } from './con-terceros-list/con-terceros-list.component';
import { ConTercerosComponent } from './con-terceros/con-terceros.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { FormlistComponent } from './formlist/formlist.component';
import { HomeComponent } from './home/home.component';
import { MasterDetailFormComponent } from './master-detail-form/master-detail-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TercerosDetailComponent } from './terceros-detail/terceros-detail.component';
import { UpdateTercerosComponent } from './update-terceros/update-terceros.component';
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
    component:ConTercerosListComponent
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
  },
  {
    path:'product/update/:id',
    pathMatch:'full',
    component:EditProductComponent
    },
    {
      path:'masterDetail/user/createUser',
      pathMatch:'full',
      component:MasterDetailFormComponent
      },
      {
        path:'terceros/create',
        pathMatch:'full',
        component:ConTercerosComponent
        },
      {
        path:'terceros/list',
        pathMatch:'full',
        component:ConTercerosListComponent
        },{
          path:'terceros/detail/:id',
          pathMatch:'full',
          component:TercerosDetailComponent
          },{
            path:'terceros/update/:id',
            pathMatch:'full',
            component:UpdateTercerosComponent
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
