import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  socialNetworks: any;
  facebookIconList = ['fa-brands', 'fa-facebook', 'fa-lg'];
  instagramIconList = ['fa-brands', 'fa-instagram', 'fa-lg'];
  twitterIconList = ['fa-brands', 'fa-twitter', 'fa-lg'];
  linkedinIconList = ['fa-brands', 'fa-linkedin-in', 'fa-lg'];
  gitHubIconList = ['fa-brands', 'fa-github', 'fa-lg'];
  gitLabIconList = ['fa-brands', 'fa-gitlab', 'fa-lg'];

  constructor(private portfolioDataService: PortfolioService) { }

  ngOnInit(): void { 
    this.portfolioDataService.getData().subscribe(data => this.socialNetworks = data.socialNetworks);
  }

}
