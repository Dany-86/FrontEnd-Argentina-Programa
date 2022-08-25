import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from 'src/app/models/profileInfo.model';
import { AboutMe } from 'src/app/models/aboutMe.model';
import {
  FormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  NgForm,
} from '@angular/forms';
import { AboutMeService } from 'src/app/services/aboutMe.service';
import { ProfileInfoService } from 'src/app/services/profleInfo.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  //maxChar: number = 100;  como declararlo constante? para hacer contador de caracteres

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
    private authService: AuthenticationService
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
        alert('Se modificó la informacion de perfil exitosamente');
        console.log(data);
      },
      (err) => {
        alert('Error: No se pudo modificar la informacion de perfil');
        console.log(err);
      }
    );
  }

  onSaveAboutMe(newAboutMeForm: AboutMe) {
    this.aboutMeService.editAboutMe(newAboutMeForm).subscribe(
      (data) => {
        alert('Se modificó la descrpción exitosamente');
        this.getAboutMe();
      },
      (err) => {
        alert('Error: No se pudo modificar la descrpción');
        console.log(err);
      }
    );
  }
}
