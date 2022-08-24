import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilePhoto } from '../models/profilePhoto.model';

@Injectable({
  providedIn: 'root',
})
export class ProfilePhotoService {
  
  url: string = "http://localhost:8080/profilePhoto/";

  constructor(private httpClient: HttpClient) {}

  getProfilePhoto():Observable<ProfilePhoto> { 
    return this.httpClient.get<ProfilePhoto>(this.url + `get/`);
  }

  changeProfilePhoto(newProfilePhoto: ProfilePhoto):Observable<any> { 
    return this.httpClient.put<any>(this.url + `update/`, newProfilePhoto);
  }

  deleteProfilePhoto():Observable<any> { 
    return this.httpClient.delete<any>(this.url + `delete/`);
  }
}
