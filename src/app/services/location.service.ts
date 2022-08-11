import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Locations } from '../Models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  GetAllLocations(): Observable<Locations[]> {
    return this.http.get<Locations[]>(this.baseApiUrl + '/api/Location');
  }
  GetLocationByID(id:any):Observable<Locations>{
    return this.http.get<Locations>(this.baseApiUrl+'/api/Location/'+id);
  }
  AddLocation(addLocationRequest:Locations):Observable<Locations>{
    return this.http.post<Locations>(this.baseApiUrl+'/api/Location',addLocationRequest);
  }
  UpdateLocation(id:number,updateLocationRequest:Locations):Observable<Locations>{
    return this.http.put<Locations>(this.baseApiUrl+'/api/Location/'+id,updateLocationRequest);
  }
  DeleteLocation(id:number):Observable<Locations>{
    return this.http.delete<Locations>(this.baseApiUrl+'/api/Location/'+id);
  }
  activeinactivelocation(activeinactivestatus:Locations):Observable<Locations>{
    return this.http.post<Locations>(this.baseApiUrl+'/api/Location/UpdateStatus',activeinactivestatus);
  }
}
