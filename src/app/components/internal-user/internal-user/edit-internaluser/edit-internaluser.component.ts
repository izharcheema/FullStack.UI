import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Internal_User } from 'src/app/Models/internal-user.model';
import { InternalUserService } from 'src/app/services/internal-user.service';

@Component({
  selector: 'app-edit-internaluser',
  templateUrl: './edit-internaluser.component.html',
  styleUrls: ['./edit-internaluser.component.css']
})
export class EditInternalUserComponent implements OnInit{
  updateInternalUserRequest:Internal_User={
    id:0,
    firstName:'',
    lastName:'',
    userName:'',
    email:'',
    designation:'',
    grade:0,
    employeeId:0,
    gender:'',
    userRole_GroupRole:0,
    userGroup:0,
    dateOFBirth:'',
    cnic:'',
    mobile:'',
  }
  Grade:any=[1,2,3,4,5]
  userRole_GroupRole:any=[1,2,3,4,5]
  userGroup:any=[1,2,3,4,5]
  internalUser:FormGroup=new FormGroup({
    id:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    userName:new FormControl(''),
    email:new FormControl(''),
    designation:new FormControl(''),
    grade:new FormControl(''),
    employeeId:new FormControl(''),
    gender:new FormControl(''),
    userRole_GroupRole:new FormControl(''),
    userGroup:new FormControl(''),
    dob:new FormControl(''),
    cnic:new FormControl(''),
    mobile:new FormControl(''),
  });
  title = 'internal-user';
  submitted=false;
  constructor(private fb:FormBuilder,private inertnaluserservice:InternalUserService,private router:Router,private route:ActivatedRoute){}
  ngOnInit():void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id=(params).get('id');
        if(id){
          this.inertnaluserservice.getInternalUser(id).subscribe({
            next:(response)=>{
              this.updateInternalUserRequest=response;
            }
          });
        }
      }
    })
    //validations
    this.internalUser=this.fb.group({
      id:[''],
      firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      lastName:['',Validators.required],
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      designation:['',Validators.required],
      grade:['',Validators.required],
      employeeId:[''],
      gender:['',Validators.required],
      userRole_GroupRole:['',Validators.required],
      userGroup:[''],
      dob:['',Validators.required],
      cnic:['',Validators.required],
      mobile:['',Validators.required],

    })
    
  }
   get grade(){
     return this.internalUser.get('grade');
   }
   get urgr(){
    return this.internalUser.get('userRole_GroupRole');
   }

  get f(){
    return this.internalUser.controls;
  }
  updateInternalUser(){
    this.inertnaluserservice.updateInternalUser(this.updateInternalUserRequest.id,this.updateInternalUserRequest).subscribe({
      next:(respnse)=>{
        this.router.navigate(['internaluser']);
      }
    });
    }
    deleteInternalUser(id:Number){
    this.inertnaluserservice.deleteInternalUser(id).subscribe({
      next:(response)=>{
        this.router.navigate(['internaluser']);
      }
    });
    }
}