import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobseekerProfile } from './jobseeker-profile';

@Injectable({
  providedIn: 'root'
})
export class JobseekerProfileService {

  //base url of the microservice
  private baseURL = "http://localhost:9999/jobseekerprofile";

  //it will create httpclient object and gives object
  constructor(private httpClient:HttpClient) { }


  createJobSeekerProfile(profile:JobseekerProfile):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,profile);

  }

  getProfileBySkill(skill:string):Observable<JobseekerProfile>{
    return this.httpClient.get<JobseekerProfile>(`${this.baseURL}/${skill}`);
  }

  updateProfileByfirstname(firstname:string,profile:JobseekerProfile):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${firstname}`,profile);
  }

  /*getUserAppiledJobs(email:string):Observable<JobseekerProfile>{
    return this.httpClient.get<JobseekerProfile>(`${this.baseURL}/${email}`);
  }*/

  getUserByEmail(email:string):Observable<JobseekerProfile>{
    return this.httpClient.get<JobseekerProfile>(`${this.baseURL}/${email}`);
  }

}
