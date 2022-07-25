import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
baseApiUrl:string =environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  GetAllEmployees():Observable<Employee[]>{
return this.http.get<Employee[]>(this.baseApiUrl+'/api/employee');
  }
  addEmployee(addEpmloyeeRequest:Employee):Observable<Employee>{
    addEpmloyeeRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl+'/api/employee',addEpmloyeeRequest);
  }
  getEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl+'/api/employee/'+id);
  }
  updateEmployee(id:string,updateEmployeeRequest:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl+'/api/employee/'+id,updateEmployeeRequest);
  }
  deleteEmployee(id:string):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl+'/api/employee/'+id);
  }
}
