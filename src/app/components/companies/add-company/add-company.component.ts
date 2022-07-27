import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Companies } from 'src/app/Models/company.model';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
addCompanyRequest:Companies={
  id:'',
  companyName:'',
  companyEmail:'',
  companyPhone:0,
  numberOfEmployees:0,
  companyAddress:''
}
  constructor(private companiesService:CompaniesService,private router:Router) { }

  ngOnInit(): void {
  }
addCompany(){
  this.companiesService.addCompany(this.addCompanyRequest).subscribe({
    next:(company)=>{
      this.router.navigate(['companies/add']);
    },
    error:(response)=>{
      console.log(response);
    }
  });
}
}
