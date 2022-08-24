import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import { LoginProvisionalAuthenticationService } from 'src/app/services/loginProvisionalAuthentication.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  isLogged: boolean = false;
  educations: Education[] = [];

  id: number = 0;
  index: number = 0;
  career: string = '';
  institution: string = '';
  img: string = '';
  url: string = '';
  since: string = '';
  through: string = '';
  complete: boolean = false;
  description: string = '';

  constructor(
    private educationService: EducationService,
    private authProvisionalService: LoginProvisionalAuthenticationService
  ) {
    this.isLogged = this.authProvisionalService.isLogged;
  }

  ngOnInit(): void {
    this.getEducations();
  }

  getEducations() {
    this.educationService
      .getEducations()
      .subscribe((data) => (this.educations = data));
  }

  onAddEducation() {
    const newEducation: Education = {
      career: this.career,
      institution: this.institution,
      img: this.img,
      url: this.url,
      since: this.since,
      through: this.through,
      complete: this.complete,
      description: this.description,
    };
    this.educationService.addEducation(newEducation).subscribe(
      (data) => {
        alert('Se agregó una nueva educación exitosamente');
        this.getEducations();
      },
      (error) => {
        alert('Error: No se pudo agregar una nueva educación');
        console.log(error);
      }
    );
    this.resetAttributes();
  }

  onEditEducation(): void {
    let newEducation: Education = {
      id: this.id,
      career: this.career,
      institution: this.institution,
      img: this.img,
      url: this.url,
      since: this.since,
      through: this.through,
      complete: this.complete,
      description: this.description,
    };
    this.educationService.editEducation(this.id, newEducation).subscribe(
      (data) => {
        alert('Se modificó la educación exitosamente');
        this.getEducations();
      },
      (error) => {
        alert('Error: No se pudo modificar la educación');
        console.log(error);
      }
    );
    this.resetAttributes();
  }

  onDeleteEducation() {
    if (this.id != undefined) {
      this.educationService.deleteEducation(this.id).subscribe(
        (data) => {
          alert('Se borró la educación exitosamente');
          console.log(this.id);
          //this.educations.splice(this.index, 1);
          this.getEducations();
        },
        (error) => {
          alert('Error: No se pudo borrar la educación');
          console.log(error);
        }
      );
      this.resetAttributes();
    }
  }

  valuesAsign(
    i: number,
    id: any,
    career: string,
    institution: string,
    img: string,
    url: string,
    since: string,
    through: string,
    complete: boolean,
    description: string
  ) {
    this.index = i;
    this.id = id;
    this.career = career;
    this.institution = institution;
    this.img = img;
    this.url = url;
    this.since = since;
    this.through = through;
    this.complete = complete;
    this.description = description;
  }

  idAndIndexAsign(id: any, i: number): void {
    this.id = id;
    this.index = i;
  }

  resetAttributes() {
    this.index = 0;
    this.id = 0;
    this.career = '';
    this.institution = '';
    this.img = '';
    this.url = '';
    this.since = '';
    this.through = '';
    this.complete = false;
    this.description = '';
  }
}
