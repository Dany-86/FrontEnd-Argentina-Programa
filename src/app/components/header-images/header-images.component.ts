import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header-images',
  templateUrl: './header-images.component.html',
  styleUrls: ['./header-images.component.css']
})
export class HeaderImagesComponent implements OnInit {

  portfolioData: any;

  constructor(private portfolioDataService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioDataService.getData().subscribe(data => this.portfolioData = data);
  }

}
