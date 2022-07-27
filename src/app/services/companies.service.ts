import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Companies } from '../Models/company.model';


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
baseApiUrl:string =environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  GetAllCompanies():Observable<Companies[]>{
return this.http.get<Companies[]>(this.baseApiUrl+'/api/company');
  }
  addCompany(addCompanyRequest:Companies):Observable<Companies>{
    addCompanyRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Companies>(this.baseApiUrl+'/api/company',addCompanyRequest);
  }
  getCompany(id:string):Observable<Companies>{
    return this.http.get<Companies>(this.baseApiUrl+'/api/company/'+id);
  }
  updateCompany(id:string,updateCompanyRequest:Companies):Observable<Companies>{
    return this.http.put<Companies>(this.baseApiUrl+'/api/company/'+id,updateCompanyRequest);
  }
  deleteCompany(id:string):Observable<Companies>{
    return this.http.delete<Companies>(this.baseApiUrl+'/api/company/'+id);
  }
}
