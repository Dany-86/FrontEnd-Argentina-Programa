import { Component, OnInit } from '@angular/core';
import { ProfilePhoto } from 'src/app/models/profilePhoto.model';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {
  FormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  NgForm,
} from '@angular/forms';
import { ProfilePhotoService } from 'src/app/services/profilePhoto.service';
import { BackImageService } from 'src/app/services/backImage.service';
import { BackImage } from 'src/app/models/backImage.model';
import { LoginProvisionalAuthenticationService } from 'src/app/services/loginProvisionalAuthentication.service';

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
    //private portfolioDataService: PortfolioService,
    private profilePhotoService: ProfilePhotoService,
    private backImageService: BackImageService,
    private formBuilder: FormBuilder,
    private authProvisionalService: LoginProvisionalAuthenticationService
  ) {
    this.isLogged = this.authProvisionalService.isLogged;
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
        alert('Se modificó la foto de perfil exitosamente');
        console.log(data);
        this.getProfilePhoto();
      },
      (err) => {
        alert('Error: No se pudo modificar la foto de perfil');
        console.log(err);
      }
    );
  }

  onChangeBackImg(newBackImage: BackImage): void {
    this.backImageService.changeBackImage(newBackImage).subscribe(
      (data) => {
        alert('Se modificó la portada exitosamente');
        this.getBackImage();
      },
      (err) => {
        alert('Error: No se pudo modificar la portada');
        console.log(err);
      }
    );
  }
  
}
