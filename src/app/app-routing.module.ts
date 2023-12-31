import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { UpdateJobComponent } from './update-job/update-job.component';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { RecruiterComponent } from './recruiter/recruiter.component';

const routes: Routes = [

  {
    path: '', component:LoginComponent
  },
  {
    path: 'home', component:HomeComponent
  },
  
  {
    path: 'register', component:RegisterComponent
  },
  {
    path: 'about', component:AboutComponent
  },
  {
    path: 'jobseeker', component:JobseekerComponent
  },
  {
    path: 'recruiter', component:RecruiterComponent
  },
 {
    path: 'profile', component:ProfileComponent
  }
  
  
  
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
