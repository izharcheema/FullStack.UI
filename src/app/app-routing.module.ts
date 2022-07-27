import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/companies/add-company/add-company.component';
import { CompaniesListComponent } from './components/companies/companies-list/companies-list.component';
import { EditCompanyComponent } from './components/companies/edit-company/edit-company.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { InternalUserComponent } from './components/internal-user/internal-user/internal-user.component';

const routes: Routes = [
  {
    path:"",
    component:EmployeesListComponent
  },
  {
    path:"employees",
    component:EmployeesListComponent
  },
  {
    path:"employees/add",
    component:AddEmployeeComponent
  },
  {
    path:"employees/edit/:id",
    component:EditEmployeeComponent
  },
  {
  path:" ",
  component:CompaniesListComponent
  },
  {
  path:"companies",
  component:CompaniesListComponent
  },
  {
  path:"companies/add",
  component:AddCompanyComponent
  },
  {
  path:"companies/edit/:id",
  component:EditCompanyComponent
  },
  {
    path:"inernal-user/add",
    component:InternalUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
