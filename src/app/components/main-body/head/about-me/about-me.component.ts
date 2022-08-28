import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from 'src/app/models/profileInfo.model';
import { AboutMe } from 'src/app/models/aboutMe.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AboutMeService } from 'src/app/services/aboutMe.service';
import { ProfileInfoService } from 'src/app/services/profleInfo.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {

  isLogged: boolean = false;

  // VARIABLES DEL FORMULARIO
  profileForm: FormGroup;
  aboutMeForm: FormGroup;

  // VAIRABLES AUXILIARES
  profileInfo: ProfileInfo = {
    name: '',
    profession: '',
    location: '',
    province: '',
    country: '',
    contact: '',
  };

  aboutMe: AboutMe = {
    aboutMe: '',
  };

  constructor(
    private profileInfoService: ProfileInfoService,
    private aboutMeService: AboutMeService,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService, 
    private toastr: ToastrService
  ) {

    

    this.profileForm = this.formBuilder.group({
      name: '',
      profession: '',
      location: '',
      province: '',
      country: '',
      contact: '',
    });

    this.aboutMeForm = this.formBuilder.group({
      aboutMe: '',
    });
  }

  ngOnInit(): void {
    this.getProfile();
    this.getAboutMe();
    this.isLogged = this.authService.setLogged();
  }

  getProfile() {
    this.profileInfoService
      .getProfile()
      .subscribe(
        (data) => (
          (this.profileInfo.name = data.name),
          (this.profileInfo.profession = data.profession),
          (this.profileInfo.location = data.location),
          (this.profileInfo.province = data.province),
          (this.profileInfo.country = data.country),
          (this.profileInfo.contact = data.contact)
        )
      );
  }

  getAboutMe() {
    this.aboutMeService
      .getAboutMe()
      .subscribe((data) => (this.aboutMe.aboutMe = data.aboutMe));
  }

  onSetValueProfile(): void {
    this.profileForm.setValue({
      name: this.profileInfo.name,
      profession: this.profileInfo.profession,
      location: this.profileInfo.location,
      province: this.profileInfo.province,
      country: this.profileInfo.country,
      contact: this.profileInfo.contact,
    });
  }

  onSetValueAboutMe(): void {
    this.aboutMeForm.setValue(this.aboutMe);
  }

  onSaveProfileInfo(profileForm: ProfileInfo) {
    this.profileInfo = {
      name: profileForm.name,
      profession: profileForm.profession,
      location: profileForm.location,
      province: profileForm.province,
      country: profileForm.country,
      contact: profileForm.contact,
    };
    console.log(profileForm);
    this.profileInfoService.editProfile(this.profileInfo).subscribe(
      (data) => {
        this.toastr.success('Se modificó la informacion de perfil exitosamente', 'Información de Perfil');
        this.getProfile();
      },
      (error) => {
        this.toastr.error('Error: No se pudo modificar la informacion de perfil', 'Información de Perfil');
      }
    );
  }

  onSaveAboutMe(newAboutMeForm: AboutMe) {
    this.aboutMeService.editAboutMe(newAboutMeForm).subscribe(
      (data) => {
        this.toastr.success('Se modificó la descripción exitosamente', 'Acerca de mi');
        this.getAboutMe();
      },
      (error) => {
        this.toastr.error('Error: No se pudo modificar la descrpción', 'Acerca de mi');
      }
    );
  }
}
