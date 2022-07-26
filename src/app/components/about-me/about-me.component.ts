import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  portfolioData: any;

  constructor(private portfolioDataService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioDataService.getData().subscribe(data => this.portfolioData = data);
  }



}
