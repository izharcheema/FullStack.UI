import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Internal_User } from 'src/app/Models/internal-user.model';
import { InternalUserService } from 'src/app/services/internal-user.service';

@Component({
  selector: 'app-internal-user',
  templateUrl: './internal-user.component.html',
  styleUrls: ['./internal-user.component.css']
})
export class InternalUserComponent implements OnInit {
addInternalUserRequest:Internal_User={
id:' ',
firstName:'',
lastName:'',
userName:'',
email:'',
designation:'',
grade:0,
employeeId:'',
gender:'',
uRUG:0,
userGroup:0,
dob:'',
cnic:'',
mobile:''
}
  constructor(private internalUserService:InternalUserService,private router:Router) { }

  ngOnInit(): void {
  }

}
