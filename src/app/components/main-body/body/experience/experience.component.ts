import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';
import { LoginProvisionalAuthenticationService } from 'src/app/services/loginProvisionalAuthentication.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  
  isLogged: boolean = false;
  //isLogged = false; VALIDACION PARA EL LOGIN
  id: number = 0; //ID DE LA EXPERIENCIA EN DB
  /* position: string = '';
  company: string = '';
  img: string = '';
  url: string = '';
  since: string = '';
  to: string = '';
  description: string = ''; */

  //experiences: Experience[] = [];

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
    //private portfolioDataService: PortfolioService,
    // ACA SE DEBE INICIALIZAR EL TOKENSERVICE private tokenService: TokenService;
    private experienceService: ExperienceService,
    private authProvisionalService: LoginProvisionalAuthenticationService
  ) {
    this.isLogged = this.authProvisionalService.isLogged;
  }

  /* ngOnInit(): void {
    this.portfolioDataService.getData().subscribe(data => this.experiences = data.experiences);
  } */

  ngOnInit(): void {

    /* this.experienceService
    .getData()
    .subscribe((data) => (this.experiences = data.experiences));  */ 
    
    // INICIA LA VALIDACION POR TOKEN:
    /* if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    } */

    
    this.getExperiences();
   
  }

  
  getExperiences() {
    this.experienceService
      .getExperiences()
      .subscribe((data) => (this.experiences = data));
  }
  

  
  onAddExperience() {
    const newExperience: Experience = {   // COMPROBAR QUE CONST NO TRAIGA PROBLEMAS
      position: this.position,
      company: this.company,
      img: this.img,
      url: this.url,
      since: this.since,
      through: this.through,
      description: this.description,
    };
    this.experienceService.addExperience(newExperience).subscribe(
      data => { alert("Se agregó una nueva experiencia exitosamente");
                console.log(data);
                this.getExperiences();}
                ,
      err => { alert("Error: No se pudo agregar una nueva experiencia");
                console.log(err); }); // VER SI FUNCIONA CON error EN VEZ DE err
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
    this.experienceService.editExperience(this.id, newExperience).subscribe(
      data => { alert("Se modificó la experiencia exitosamente");
                console.log(data);
                this.getExperiences();
              },
      err => { alert("Error: No se pudo modificar la experiencia");
                console.log(err); });
    this.resetAttributes();
    
  }

  
  onDeleteExperience() {
    if(this.id != undefined) {
      this.experienceService.deleteExperience(this.id).subscribe( 
      data => { alert("Se borró la experiencia exitosamente");
                console.log(this.index);
                //this.experiences.splice(this.index, 1);
                this.getExperiences();
              },
      err => { alert("Error: No se pudo borrar la experiencia");
                console.log(err); });
    this.resetAttributes(); // id VA CON SIGNO DE PREGUNTA??
    }
  }

  // OTROS METODOS NECESARIOS:

  // PARA ASIGNAR LOS VALORES DEL SERVICIO A LOS ATRIBUTOS DEL COMPONENTES Y VERLOS EN LA PLANTILLA MODAL
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

  // PARA ASIGNAR SOLO EL INDICE DE LA ITERACION DEL ARRAY
  idAndIndexAsign(id: any, i: number): void {
    this.id = id;
    this.index = i;
  }

  // PARA RESETEAR TODOS LOS ATRIBUTOS
  resetAttributes() {
    this.index = 0;
    this.id = 0; //FUNCIONA ASI??
    this.position = '';
    this.company = '';
    this.since =  '';
    this.through = '';
    this.description = '';
    this.img = '';
    this.url = '';
  }

  
  // FUNCIONANDO ACTUALMENTE

  /* onAddExperience() {
    let newExperience: Experience = {
      position: this.position,
      company: this.company,
      img: this.img,
      url: this.url,
      since: this.since,
      to: this.to,
      description: this.description,
    };
    this.experienceService.addExperience(newExperience);
    this.resetAttributes();
  } */

  /* onEdit(): void{
    let newExperience: Experience = {
      position: this.position, 
      company: this.company, 
      since: this.since,
      to: this.to,
      description: this.description,
      img: this.img,
      url: this.url
    }
    this.experienceService.editExperience(this.index, newExperience);
    this.resetAttributes();
  } */

  /* onDeleteExperience() {
    this.experienceService.deleteExperience(this.index);
    this.resetAttributes();
  } */

  // OTROS METODOS NECESARIOS:

  // PARA ASIGNAR LOS VALORES DEL SERVICIO A LOS ATRIBUTOS DEL COMPONENTES Y VERLOS EN LA PLANTILLA MODAL
  /* valuesAsign(i: number, p: string, c: string, s: string, t: string, d:  string, img: string, url: string) {
    this.index = i;
    this.position = p;
    this.company = c;
    this.since =  s;
    this.to = t;
    this.description = d;
    this.img = img;
    this.url = url;
  } */

  // PARA ASIGNAR SOLO EL INDICE DE LA ITERACION DEL ARRAY
  /* indexAsign(i: number): void {
    this.index = i;
  } */

  // PARA RESETEAR TODOS LOS ATRIBUTOS
  /* resetAttributes() {
    this.index = 0;
    this.position = '';
    this.company = '';
    this.since =  '';
    this.to = '';
    this.description = '';
    this.img = '';
    this.url = '';
  } */
}
