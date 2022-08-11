import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Locations } from 'src/app/Models/location.model';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {
  addLocationRequest: Locations = {
    id: 0,
    shortName: '',
    name: '',
    status: 0,
  }
  locations: FormGroup = new FormGroup({
    shortName: new FormControl(''),
    name: new FormControl(''),
    status: new FormControl(''),
  });
  title = 'location';
  submitted = false;
  constructor(private fb: FormBuilder, private locationService: LocationService, private route: Router) { }
  ngOnInit(): void {
    this.locations = this.fb.group({
      shortName: ['', Validators.required],
      name: ['', Validators.required],
      status: ['', Validators.required],
    })
  }
  get f(){
    return this.locations.controls;
  }
 OnSubmit(){
  this.submitted=true;
  if(this.locations.invalid){
    return;
  }
  this.locationService.AddLocation(this.addLocationRequest)
  .subscribe({
    next:(locations)=>{
      this.route.navigate(['location']);
    },
    error:(response)=>{
      console.log(response);
    }
  });
 }
 onReset():void {
  this.submitted=false;
  this.locations.reset();
}
}
