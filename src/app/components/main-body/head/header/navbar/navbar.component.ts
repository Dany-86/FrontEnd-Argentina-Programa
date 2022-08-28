import { Component, OnInit } from '@angular/core';
import { SocialNetwork } from 'src/app/models/socialNetwork.model';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { SocialNetworkService } from 'src/app/services/socialNetwork.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  
  isLogged: boolean = false;

  socialNetworksList: SocialNetwork[] = [];
  enabled!: boolean;
  socialNetworkForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private socialNetworkService: SocialNetworkService,
    private authService: AuthenticationService, 
    private toastr: ToastrService
  ) {

   

    this.socialNetworkForm = this.formBuilder.group({
      name: '',
      enabled: false,
      url: '',
    });
     
  }

  ngOnInit(): void {
    this.isLogged = this.authService.setLogged();
    this.getSocialNetworks();
  }

  getSocialNetworks() {
    this.socialNetworkService
      .getSocialNetworks()
      .subscribe((data) => (this.socialNetworksList = data));
  }

  onChangeEnabled(i: number, enabled: boolean) {
    if (enabled) {
      this.socialNetworksList[i].enabled = false;
    } else {
      this.socialNetworksList[i].enabled = true;
    }
  }

  onEditSocialNetworks() {
    this.socialNetworkService.editSocialNetworks(this.socialNetworksList)
      .subscribe((data) => { this.toastr.success('Se guardaron los cambios exitosamente', 'Redes');},
                 (error) => { this.toastr.error('Error: No se se pudieron guardar los cambios', 'Redes');});
  }

  onSaveSocialNetworks(): void {
    this.socialNetworkService.editSocialNetworks(this.socialNetworksList);
  }

  onLogOut() {
    this.authService.LogOut();
  }

}
