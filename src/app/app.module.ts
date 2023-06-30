import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { AboutComponent } from './about/about.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { CreateJobseekerprofileComponent } from './create-jobseekerprofile/create-jobseekerprofile.component';
import { UpdateJobseekerprofileComponent } from './update-jobseekerprofile/update-jobseekerprofile.component';
import { GetUserandJobsJobseekerComponent } from './get-userand-jobs-jobseeker/get-userand-jobs-jobseeker.component';
import { GetUserJobseekerComponent } from './get-user-jobseeker/get-user-jobseeker.component';
import { GetbySkillJobseekerComponent } from './getby-skill-jobseeker/getby-skill-jobseeker.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
   
    UpdateJobComponent,
    
    HeaderComponent,
    NavbarComponent,
   
    AboutComponent,
    JobseekerComponent,
    RecruiterComponent,
    CreateJobseekerprofileComponent,
    UpdateJobseekerprofileComponent,
    GetUserandJobsJobseekerComponent,
    GetUserJobseekerComponent,
    GetbySkillJobseekerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
