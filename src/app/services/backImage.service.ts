import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackImage } from '../models/backImage.model';

@Injectable({
  providedIn: 'root',
})
export class BackImageService {
  
  url: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) {}

  getBackImage():Observable<BackImage> { 
    return this.httpClient.get<BackImage>(this.url + `backImage/get/`);
  }

  changeBackImage(newBackImage: BackImage):Observable<any> { 
    return this.httpClient.put<any>(this.url + `backImage/update/`, newBackImage);
  }

}