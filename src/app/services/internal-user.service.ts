import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InternalUserService {
  baseApiUrl:string =environment.baseApiUrl;
  constructor() { }
}
