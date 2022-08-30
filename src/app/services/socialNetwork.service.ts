import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialNetwork } from "../models/socialNetwork.model";

@Injectable({
    providedIn: 'root'
  })

export class SocialNetworkService {
        
    // url: string = "http://localhost:8080/api/";
    url: string = "https://api-myporfolio.herokuapp.com/api/"; // Remote

    constructor(private httpClient: HttpClient) {}

    getSocialNetworks():Observable<SocialNetwork[]> { 
      return this.httpClient.get<SocialNetwork[]>(this.url + `socialNetworks/get/`);
    }

    editSocialNetworks(socialNetworksList: SocialNetwork[]) {
      return this.httpClient.put<any>(this.url + `socialNetworks/update/list`, socialNetworksList);
    }
}