import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EducationService } from 'src/app/services/education.service';
import { ToastrService } from 'ngx-toastr';

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
    private authService: AuthenticationService, 
    private toastr: ToastrService
  ) {
    
  }

  ngOnInit(): void {
    this.getEducations();
    this.isLogged = this.authService.setLogged();
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
        this.toastr.success('Se agregó una nueva educación exitosamente', 'Educación');
        this.getEducations();
      },
      (error) => {
        this.toastr.error('Error: No se pudo agregar la educación', 'Educación');
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
    this.educationService.editEducation(newEducation).subscribe(
      (data) => {
        this.toastr.success('Se modificó la educación exitosamente', 'Educación');
        this.getEducations();
      },
      (error) => {
        this.toastr.error('Error: No se pudo modificar la educación', 'Educación');
      }
    );
    this.resetAttributes();
  }

  onDeleteEducation() {
    if (this.id != undefined) {
      this.educationService.deleteEducation(this.id).subscribe(
        (data) => {
          this.toastr.success('Se borró la educación exitosamente', 'Educación');
          this.getEducations();
        },
        (error) => {
          this.toastr.error('Error: No se pudo borrar la educación', 'Educación');
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
