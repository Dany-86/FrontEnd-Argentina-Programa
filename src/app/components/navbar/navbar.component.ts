import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  socialNetworks: any;
  socialList = ['fa-brands', 'fa-instagram', 'fa-lg'];

  constructor(private portfolioDataService: PortfolioService) { }

  ngOnInit(): void { 
    this.portfolioDataService.getData().subscribe(data => this.socialNetworks = data.socialNetworks);
  }

}
