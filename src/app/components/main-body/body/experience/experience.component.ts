import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  
  isLogged: boolean = false;
  id: number = 0;
  index: number = 0;
  position: string = '';
  company: string = '';
  img: string = '';
  url: string = '';
  since: string = '';
  through: string = '';
  description: string = '';

  experiences: Experience[] = [];

  addExperienceForm: any;

  constructor(
    private experienceService: ExperienceService,
    private authService: AuthenticationService, 
    private toastr: ToastrService
    ) {
    
  }

  ngOnInit(): void {
    
    this.getExperiences();
    this.isLogged = this.authService.setLogged();
  }
  
  getExperiences() {
    this.experienceService
      .getExperiences()
      .subscribe((data) => (this.experiences = data));
  }
  
  onAddExperience() {
    const newExperience: Experience = { 
      position: this.position,
      company: this.company,
      img: this.img,
      url: this.url,
      since: this.since,
      through: this.through,
      description: this.description,
    };
    this.experienceService.addExperience(newExperience).subscribe(
      data => { 
                this.toastr.success('Se agregó una nueva experiencia exitosamente', 'Experiencia');
                this.getExperiences();}
                ,
      error => { 
                this.toastr.error('Error: No se pudo agregar la experiencia', 'Experiencia');
              }); 
                this.resetAttributes();
                
  }

  onEdit(): void{
    let newExperience: Experience = {
      id: this.id,
      position: this.position, 
      company: this.company, 
      since: this.since,
      through: this.through,
      description: this.description,
      img: this.img,
      url: this.url
    }
    this.experienceService.editExperience(newExperience).subscribe(
      data => { 
                this.toastr.success('Se modificó la experiencia exitosamente', 'Experiencia');
                this.getExperiences();
              },
      err => { 
                this.toastr.error('Error: No se pudo modificar la experiencia', 'Experiencia');
              });
    this.resetAttributes();
    
  }
  
  onDeleteExperience() {
    if(this.id != undefined) {
      this.experienceService.deleteExperience(this.id).subscribe( 
      data => { 
                this.toastr.success('Se borró la experiencia exitosamente', 'Experiencia');
                this.getExperiences();
              },
      err => { 
                this.toastr.error('Error: No se pudo borrar la experiencia', 'Experiencia');
              });
    this.resetAttributes(); 
    }
  }

  // OTROS METODOS NECESARIOS:
  // PARA ASIGNAR LOS VALORES DE 'experienceService' A LOS ATRIBUTOS DEL COMPONENTES Y VERLOS EN LA PLANTILLA MODAL
  valuesAsign(i: number, id: any, position: string, company: string, since: string, through: string, description:  string, img: string, url: string) {
    this.index = i;
    this.id = id;
    this.position = position;
    this.company = company;
    this.since =  since;
    this.through = through;
    this.description = description;
    this.img = img;
    this.url = url;
  }

  // PARA ASIGNAR SOLO EL INDICE DE LA ITERACION DEL ARRAY 'experiences[]'
  idAndIndexAsign(id: any, i: number): void {
    this.id = id;
    this.index = i;
  }

  // PARA RESETEAR TODOS LOS ATRIBUTOS
  resetAttributes() {
    this.index = 0;
    this.id = 0; 
    this.position = '';
    this.company = '';
    this.since =  '';
    this.through = '';
    this.description = '';
    this.img = '';
    this.url = '';
  }

}
