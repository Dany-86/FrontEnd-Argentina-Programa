import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileInfo } from '../models/profileInfo.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileInfoService {

  url: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) {}

  getProfile():Observable<ProfileInfo> { 
    return this.httpClient.get<ProfileInfo>(this.url + `profile/get/`);
  }

  editProfile(newProfile: ProfileInfo):Observable<any> {
    return this.httpClient.put<any>(this.url + `profile/update/`, newProfile);
  }

}
