import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { CompaniesListComponent } from './components/companies/companies-list/companies-list.component';
import { AddCompanyComponent } from './components/companies/add-company/add-company.component';
import { EditCompanyComponent } from './components/companies/edit-company/edit-company.component';
import { InternalUserComponent } from './components/internal-user/internal-user/internal-user.component';
import { InternalUserlistComponent } from './components/internal-user/internal-user/internal-users-list/internal-userlist/internal-userlist.component';
import { EditInternalUserComponent } from './components/internal-user/internal-user/edit-internaluser/edit-internaluser.component';
import { LocationListComponent } from './components/location/location-list/location-list.component';
import { AddlocationComponent } from './components/location/addlocation/addlocation.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    CompaniesListComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    InternalUserComponent,
    InternalUserlistComponent,
    InternalUserlistComponent,
    EditInternalUserComponent,
    LocationListComponent,
    AddlocationComponent,
    LocationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
