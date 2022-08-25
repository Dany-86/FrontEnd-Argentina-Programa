import { Component, OnInit } from '@angular/core';
import { SocialNetwork } from 'src/app/models/socialNetwork.model';
import {
  FormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { SocialNetworkService } from 'src/app/services/socialNetwork.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    private authService: AuthenticationService
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
      //this.socialNetworkService.editSocialNetworks(i, enabled);// se edita directamente, pero deberia hacerlo en submit- corregir-
    } else {
      this.socialNetworksList[i].enabled = true;
      //this.socialNetworkService.editSocialNetworks(i, enabled);
    }
  }

  onEditSocialNetworks() {
    this.socialNetworkService.editSocialNetworks(this.socialNetworksList)
      .subscribe((data) => { alert("Se agregó una nueva experiencia exitosamente");},
                 (error) => { alert("Error: No se pudo agregar una nueva experiencia");});
  }

  onSaveSocialNetworks(): void {
    this.socialNetworkService.editSocialNetworks(this.socialNetworksList);
    // estos deberia editar todo el form
  }

  onLogOut() {
    console.log("Cirre en navbar");
    
    this.authService.LogOut();
  }
  /* onChangeEnabled() {
    this.socialNetworkService.changeEnabled();
  }

  onSetIndex(i: number) {
    this.socialNetworkService.setIndex(i);
  } ESTO ES PARA INTENTAR HABILITAR O DESHABILITA */

  /*  onPatchValueForm(): void {
         con este metodo intente asignar valores a los campos link
  }
 */
}
