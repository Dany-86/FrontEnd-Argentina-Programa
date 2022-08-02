import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: any;

  constructor(private portfolioDataService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioDataService.getData().subscribe(data => this.educationList = data.educations);
  }

}
