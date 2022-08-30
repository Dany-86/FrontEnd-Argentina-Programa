import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilePhoto } from '../models/profilePhoto.model';

@Injectable({
  providedIn: 'root',
})
export class ProfilePhotoService {
  
  // url: string = "http://localhost:8080/api/";
  url: string = "https://api-myporfolio.herokuapp.com/api/"; // Remote

  constructor(private httpClient: HttpClient) {}

  getProfilePhoto():Observable<ProfilePhoto> { 
    return this.httpClient.get<ProfilePhoto>(this.url + `profilePhoto/get/`);
  }

  changeProfilePhoto(newProfilePhoto: ProfilePhoto):Observable<any> { 
    return this.httpClient.put<any>(this.url + `profilePhoto/update/`, newProfilePhoto);
  }

}
