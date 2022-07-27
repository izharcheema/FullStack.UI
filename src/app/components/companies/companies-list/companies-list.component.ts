import { Component, OnInit } from '@angular/core';
import { Companies } from 'src/app/Models/company.model';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
companies:Companies[]=[];
  constructor(private companiesService:CompaniesService) { }

  ngOnInit(): void {
    this.companiesService.GetAllCompanies().subscribe({
      next:(companies)=>{
        this.companies=companies;
        console.log(this.companies);
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }

}
