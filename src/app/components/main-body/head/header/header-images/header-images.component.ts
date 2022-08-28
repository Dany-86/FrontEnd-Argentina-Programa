import { Component, OnInit } from '@angular/core';
import { ProfilePhoto } from 'src/app/models/profilePhoto.model';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { ProfilePhotoService } from 'src/app/services/profilePhoto.service';
import { BackImageService } from 'src/app/services/backImage.service';
import { BackImage } from 'src/app/models/backImage.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header-images',
  templateUrl: './header-images.component.html',
  styleUrls: ['./header-images.component.css'],
})
export class HeaderImagesComponent implements OnInit {

  isLogged: boolean = false;

  profilePhotoForm: FormGroup;
  backImageForm: FormGroup;

  profilePhoto: ProfilePhoto = {
    url: '',
  };
  backImage: BackImage = {
    url: '',
  };

  constructor(
    private profilePhotoService: ProfilePhotoService,
    private backImageService: BackImageService,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService, 
    private toastr: ToastrService
  ) {
    
    this.profilePhotoForm = this.formBuilder.group({
      url: '',
    });
    this.backImageForm = this.formBuilder.group({
      url: '',
    });
  }

  ngOnInit(): void {
    this.getProfilePhoto();
    this.getBackImage();
    this.isLogged = this.authService.setLogged();
  }

  getProfilePhoto() {
    this.profilePhotoService
      .getProfilePhoto()
      .subscribe((data) => (this.profilePhoto.url = data.url));
  }

  getBackImage() {
    this.backImageService
      .getBackImage()
      .subscribe((data) => (this.backImage.url = data.url));
  }

  onSetValueProfilePhoto(): void {
    this.profilePhotoForm.setValue(this.profilePhoto);
  }

  onSetValueBackImage(): void {
    this.backImageForm.setValue(this.backImage);
  }

  onChangePhoto(newProfilePhoto: ProfilePhoto): void {
    this.profilePhotoService.changeProfilePhoto(newProfilePhoto).subscribe(
      (data) => {
        this.toastr.success('Se modificó la foto de perfil exitosamente', 'Foto de Perfil');
        this.getProfilePhoto();
      },
      (error) => {
        this.toastr.error('Error: No se pudo modificar la foto de perfil', 'Foto de Perfil');
      }
    );
  }

  onChangeBackImg(newBackImage: BackImage): void {
    this.backImageService.changeBackImage(newBackImage).subscribe(
      (data) => {
        this.toastr.success('Se modificó la portada exitosamente', 'Portada');
        this.getBackImage();
      },
      (error) => {
        this.toastr.error('Error: No se pudo modificar la portada', 'Portada');
      }
    );
  }
  
}
