import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './front/home/home.component';
import { LoginComponent } from './front/login/login.component';
import { RegisterComponent } from './front/register/register.component';
import { AppBodyComponent } from './front/app-body/app-body.component';
import { AdminGuard } from './front/guards/admin.guard';
import { ForgotpasswordComponent } from './front/forgotpassword/forgotpassword.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { UserGuard } from './front/guards/user.guard';
import { BackofficeComponent } from './front/backoffice/backoffice.component';
import { EventcrudComponent } from './front/backoffice/eventcrud/eventcrud.component';
import { UsersadminComponent } from './front/backoffice/components/usersadmin/usersadmin.component';
import { AddFormationComponent } from './front/backoffice/formation/add-formation/add-formation.component';
import { AddJobComponent } from './front/backoffice/job/add-job/add-job.component';
import { AddSkillComponent } from './front/backoffice/skills/add-skill/add-skill.component';
import { DisplaySkillComponent } from './front/backoffice/skills/display-skill/display-skill.component';
import { DisplayJobComponent } from './front/backoffice/job/display-job/display-job.component';
import { DisplayFrontJobComponent } from './front/backoffice/job/display-front-job/display-front-job.component';
import { DisplayFormationComponent } from './front/backoffice/formation/display-formation/display-formation.component';
import { DisplayFrontFormationComponent } from './front/backoffice/formation/display-front-formation/display-front-formation.component';

const routes: Routes = [
//General empty page and its children FRONT
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'app',component:AppBodyComponent,canActivate:[UserGuard],children:[
  //components of inside the app "product,event,formation..."
 
]},
{path:'admin',component:BackofficeComponent,canActivate:[AdminGuard],children:[
  {path:'',redirectTo:'user',pathMatch:"full"},
  {path:'user',component:UsersadminComponent},
  {path:'event',component:EventcrudComponent},
  {path:'job',component:AddJobComponent},
  {path:'formation',component:AddFormationComponent},
  {path:'viewformation',component:DisplayFormationComponent},
  {path:'viewjob',component:DisplayJobComponent}]},
{path:'forgotpassword',component:ForgotpasswordComponent},
{path:'skill',component:AddSkillComponent},
{path:'viewfrontformation',component:DisplayFrontFormationComponent},
{path:'viewfrontjob',component:DisplayFrontJobComponent},
{path:'viewskill',component:DisplaySkillComponent},
{path:'notfound',component:NotFoundComponent},
{path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
