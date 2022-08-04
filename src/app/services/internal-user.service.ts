import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Internal_User } from '../Models/internal-user.model';

@Injectable({
  providedIn: 'root'
})
export class InternalUserService {
  baseApiUrl:string =environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  GetAllInternalUsers():Observable<Internal_User[]>{
    return this.http.get<Internal_User[]>(this.baseApiUrl+'/api/InternalUser');
      }
  addinternaluser(addInternalUserRequest:Internal_User):Observable<Internal_User>{
    addInternalUserRequest.id=0;
    return this.http.post<Internal_User>(this.baseApiUrl+'/api/InternalUser',addInternalUserRequest);
  }
  getInternalUser(id:any):Observable<Internal_User>{
    return this.http.get<Internal_User>(this.baseApiUrl+'/api/InternalUser/'+id);
  }
  updateInternalUser(id:number,updateInternalUserRequest:Internal_User):Observable<Internal_User>{
  return this.http.put<Internal_User>(this.baseApiUrl+'/api/InternalUser/'+id,updateInternalUserRequest);
  }
  deleteInternalUser(id:Number):Observable<Internal_User>{
    return this.http.delete<Internal_User>(this.baseApiUrl+'/api/Internaluser/'+id);
  }
}
