import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Companies } from 'src/app/Models/company.model';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
companyDetails:Companies={
  id:'',
  companyName:'',
  companyEmail:'',
  companyPhone:0,
  numberOfEmployees:0,
  companyAddress:''
}
  constructor(private route:ActivatedRoute,private companiesService:CompaniesService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id=(params).get('id');
        if(id){
          this.companiesService.getCompany(id).subscribe({
            next:(response)=>{
              this.companyDetails=response;
            }
          });
        }
      }
    })
  }
updateCompany(){
this.companiesService.updateCompany(this.companyDetails.id,this.companyDetails).subscribe({
  next:(response)=>{
    this.router.navigate(['companies']);
  }
});
}
deleteCompany(id:string){
this.companiesService.deleteCompany(id).subscribe({
  next:(response)=>{
    this.router.navigate(['companies']);
  }
});
}
}
