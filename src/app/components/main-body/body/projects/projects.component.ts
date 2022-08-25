import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  isLogged: boolean = false;

  projects: Project[] = [];

  id: number = 0;
  index: number = 0;
  name: string = '';
  company: string = '';
  img: string = '';
  url: string = '';
  since: string = '';
  through: string = '';
  description: string = '';

  constructor(
    private projectService: ProjectService,
    private authService: AuthenticationService
    ) {
    
  }

  ngOnInit(): void {
    this.getProjects();
    this.isLogged = this.authService.setLogged();
  }

  getProjects() {
    this.projectService.getProjects()
      .subscribe((data) => (this.projects = data));
  }

  onAddProject() {
    const newProject: Project = {   
      name: this.name,
      company: this.company,
      img: this.img,
      url: this.url,
      since: this.since,
      through: this.through,
      description: this.description,
    };
    this.projectService.addProject(newProject).subscribe(
      data => { alert("Se agregó un nuevo proyecto exitosamente");
                this.getProjects();}
                ,
      error => { alert("Error: No se pudo agregar un nuevo proyecto");
                console.log(error); });
                this.resetAttributes();
  }

  onEditProject(): void{
    let newProject: Project = {
      id: this.id,
      name: this.name,
      company: this.company,
      img: this.img,
      url: this.url,
      since: this.since,
      through: this.through,
      description: this.description,
    }
    this.projectService.editProject(this.id, newProject).subscribe(
      data => { alert("Se modificó el nuevo proyecto exitosamente");
                this.getProjects();}
                ,
      error => { alert("Error: No se pudo modificar el nuevo proyecto");
                console.log(error); });
    this.resetAttributes();
  }

  onDeleteProject() {
    if(this.id != undefined) {
      this.projectService.deleteProject(this.id).subscribe( 
      data => { alert("Se borró el proyecto exitosamente");
                console.log(this.index);
                this.getProjects();
              },
      error => { alert("Error: No se pudo borrar el proyecto");
                console.log(error); });
    this.resetAttributes(); 
    }
    
  }

  valuesAsign(i: number, id: any, name: string, company: string, img: string, url: string, since: string, through: string, description:  string) {
    this.index = i;
    this.id = id;
    this.name = name;
    this.company = company;
    this.img = img;
    this.url = url;
    this.since =  since;
    this.through = through;
    this.description = description;
  }

  idAndIndexAsign(id: any, i: number): void {
    this.id = id;
    this.index = i;
  }

  resetAttributes() {
    this.index = 0;
    this.id = 0;
    this.name = '';
    this.company = '';
    this.img = '';
    this.url = '';
    this.since =  '';
    this.through = '';
    this.description = '';
  }
}
