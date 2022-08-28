import { Component, OnInit } from '@angular/core'; 
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from "src/app/models/skill.model";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hard-and-soft-skills',
  templateUrl: './hard-and-soft-skills.component.html',
  styleUrls: ['./hard-and-soft-skills.component.css']
})
export class HardAndSoftSkillsComponent implements OnInit {

  isLogged: boolean = false;
  skills: Skill[]= [];

  id: number = 0;
  index: number = 0;
  skill: string = '';
  percent: number = 0;
  img: string = '';
  url: string = '';
  colorCircle: string = '';

  constructor(
    private skillService: SkillService,
    private authService: AuthenticationService, 
    private toastr: ToastrService
    ) {
      
    }

  ngOnInit(): void {
    this.getSkills();
    this.isLogged = this.authService.setLogged();
  }

  getSkills() {
    this.skillService.getSkills()
      .subscribe((data) => (this.skills = data));
  }

  onAddSkill() {
    const newSkill: Skill = {   
      skill: this.skill,
      percent: this.percent,
      img: this.img,
      url: this.url,
      colorCircle: this.colorCircle,
    };
    this.skillService.addSkill(newSkill).subscribe(
      data => { 
                this.toastr.success('Se agregó una nueva habilidad exitosamente.', 'Habilidad');
                this.getSkills();}
                ,
      error => {
                 this.toastr.error('Error: No se pudo agregar una nueva habilidad.', 'Habilidad');
                 });
  }

  onEditSkill(): void{
    let newSkill: Skill = {
      id: this.id,
      skill: this.skill,
      percent: this.percent,
      img: this.img,
      url: this.url,
      colorCircle: this.colorCircle,
    }
    this.skillService.editSkill(newSkill).subscribe(
      data => { 
                this.toastr.success('Se modificó la habilidad exitosamente.', 'Habilidad');
                this.getSkills();}
                ,
      error => { 
                this.toastr.error('Error: No se pudo modificar la habilidad.', 'Habilidad');
                });
    this.resetAttributes();
  }

  onDeleteSkill() {
    if(this.id != undefined) {
      this.skillService.deleteSkill(this.id).subscribe( 
      data => { 
      this.toastr.success('Se borró esta habilidad exitosamente.', 'Habilidad');
                this.getSkills();
              },
      error => { 
                this.toastr.error('Error: No se pudo borrar esta habilidad.', 'Habilidad');
                 });
    this.resetAttributes(); 
    }
    
  }

  valuesAsign(i: number, id: any, skill: string, percent: number, img: string, url: string, colorCircle:  string) {
    this.index = i;
    this.id = id;
    this.skill = skill;
    this.percent = percent;
    this.img = img;
    this.url = url;
    this.colorCircle = colorCircle;
  }

  idAndIndexAsign(id: any, i: number): void {
    this.id = id;
    this.index = i;
  }

  resetAttributes() {
    this.index = 0;
    this.id = 0;
    this.skill = '';
    this.percent = 0;
    this.img = '';
    this.url = '';
    this.colorCircle = '';
  }

}
