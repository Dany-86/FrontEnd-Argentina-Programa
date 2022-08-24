import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileInfo } from '../models/profileInfo.model';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProfileInfoService {

  url: string = "http://localhost:8080/profile/";

  constructor(private httpClient: HttpClient) {}

  getProfile():Observable<ProfileInfo> { 
    return this.httpClient.get<ProfileInfo>(this.url + `get/`);
  }

  editProfile(newProfile: ProfileInfo):Observable<any> {
    return this.httpClient.put<any>(this.url + `update/`, newProfile);
  }

  // no se usa
  deleteProfile():Observable<any> { 
    return this.httpClient.delete<any>(this.url + `delete/`);
  }

  /* getData(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  } */

  /* saveProfileInfo(newProfileInfo: ProfileInfo) {
      console.log(newProfileInfo);
  } */

   /*  getData():Observable<any> { // usando el .json
      return this.httpClient.get<any>(this.urlJson);
    } */

}
