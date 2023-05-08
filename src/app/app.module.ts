
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './front/header/header.component';
import { LoginComponent } from './front/login/login.component';
import { ForgotpasswordComponent } from './front/forgotpassword/forgotpassword.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { RegisterComponent } from './front/register/register.component';
import { AppBodyComponent } from './front/app-body/app-body.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FooterComponent } from './front/footer/footer.component';
import { BackofficeComponent } from './front/backoffice/backoffice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EventcrudComponent } from './front/backoffice/eventcrud/eventcrud.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UsersadminComponent } from './front/backoffice/components/usersadmin/usersadmin.component';
import { AffichageComponent } from './front/event/affichage/affichage.component';
import { AddJobComponent } from './front/backoffice/job/add-job/add-job.component';
import { DisplayJobComponent } from './front/backoffice/job/display-job/display-job.component';
import { AddFormationComponent } from './front/backoffice/formation/add-formation/add-formation.component';
import { DisplayFormationComponent } from './front/backoffice/formation/display-formation/display-formation.component';
import { EndnavComponent } from './front/backoffice/endnav/endnav.component';

import { AddSkillComponent } from './front/backoffice/skills/add-skill/add-skill.component';
import { DisplaySkillComponent } from './front/backoffice/skills/display-skill/display-skill.component';
import { DisplayFrontFormationComponent } from './front/backoffice/formation/display-front-formation/display-front-formation.component';
import { DisplayFrontJobComponent } from './front/backoffice/job/display-front-job/display-front-job.component'




@NgModule({
  declarations: [
    
    EventcrudComponent,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ForgotpasswordComponent,
    NavbarComponent,
    RegisterComponent,
    AppBodyComponent,
    NotFoundComponent,
    FooterComponent,
    BackofficeComponent,
    UsersadminComponent,
    AffichageComponent,
    AddJobComponent,
    DisplayJobComponent,
    AddFormationComponent,
    DisplayFormationComponent,
    EndnavComponent,
  

    AddSkillComponent,
    DisplaySkillComponent,
    DisplayFrontFormationComponent,
    DisplayFrontJobComponent,
 
   

 
 
  ],
  imports: [
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSortModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([]),
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>{
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost'],
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
