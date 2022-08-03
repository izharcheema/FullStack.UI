import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Internal_User } from 'src/app/Models/internal-user.model';
import { InternalUserService } from 'src/app/services/internal-user.service';

@Component({
  selector: 'app-internal-user',
  templateUrl: './internal-user.component.html',
  styleUrls: ['./internal-user.component.css']
})
export class InternalUserComponent implements OnInit{
  addInternalUserRequest:Internal_User={
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
    dob:'',
    cnic:'',
    mobile:'',
  }
  Grade:any=[1,2,3,4,5]
  userRole_GroupRole:any=[1,2,3,4,5]
  userGroup:any=[1,2,3,4,5]
  internalUser:FormGroup=new FormGroup({
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


  constructor(private fb:FormBuilder,private inertnaluserservice:InternalUserService,private router:Router){}
  ngOnInit():void {
    //validations
    this.internalUser=this.fb.group({
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

  // changeGrade(e:any) {
  //   console.log(e.value)
  //   this.Grade.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }
  // changeuRGR(e:any){
  //   console.log(e.value)
  //   this.uRGR.setValue(e.target.value,{
  //     onlySelf:true
  //   })
  // }
   get grade(){
     return this.internalUser.get('grade');
   }
   get urgr(){
    return this.internalUser.get('userRole_GroupRole');
   }

  get f(){
    return this.internalUser.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.internalUser.invalid){
      return;
    }
    this.inertnaluserservice.addinternaluser(this.addInternalUserRequest)
    .subscribe({
      next:(internalUser)=>{
        this.router.navigate(['internaluser/add']);
      },
      error:(respnse)=>{
        console.log(respnse);
      }
    });
  }
  onReset():void {
    this.submitted=false;
    this.internalUser.reset();
  }

}