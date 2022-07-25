import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
employees:Employee[]=[];
  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.GetAllEmployees().subscribe({
      next:(employees)=>{
        this.employees=employees;
        console.log(this.employees);
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }
}
