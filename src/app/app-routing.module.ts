import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/companies/add-company/add-company.component';
import { CompaniesListComponent } from './components/companies/companies-list/companies-list.component';
import { EditCompanyComponent } from './components/companies/edit-company/edit-company.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { EditInternalUserComponent } from './components/internal-user/internal-user/edit-internaluser/edit-internaluser.component';
import { InternalUserComponent } from './components/internal-user/internal-user/internal-user.component';
import { InternalUserlistComponent } from './components/internal-user/internal-user/internal-users-list/internal-userlist/internal-userlist.component';
import { AddlocationComponent } from './components/location/addlocation/addlocation.component';
import { EditlocationComponent } from './components/location/editlocation/editlocation.component';
import { LocationListComponent } from './components/location/location-list/location-list.component';

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
  path:"",
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
    path:"internaluser/add",
    component:InternalUserComponent
  },
  {
    path:"internaluser",
    component:InternalUserlistComponent
  },
  {
    path:"internaluser/edit/:id",
    component:EditInternalUserComponent
  },
  {
    path:"",
    component:InternalUserlistComponent
  },
  {
    path:"",
    component:LocationListComponent
  },
  {
    path:"location",
    component:LocationListComponent
  },
  {
    path:"location/add",
    component:AddlocationComponent
  },
  {
    path:"location/edit/:id",
    component:EditlocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
