import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any;
  
    constructor(
        private portfolioService: PortfolioService
    ) { }
  
    ngOnInit(): void {
        this.portfolioService.getPortfolio().subscribe(data => {
            this.miPortfolio = data;
        });
    }
}
