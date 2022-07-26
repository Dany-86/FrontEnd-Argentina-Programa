import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;

  constructor(private portfolioDataService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioDataService.getData().subscribe(data => this.projects = data.projects);
  }

}
