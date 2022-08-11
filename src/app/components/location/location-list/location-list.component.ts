import { Component, OnInit } from '@angular/core';
import { Locations } from 'src/app/Models/location.model';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  location: Locations[] = [];
  updateStatusRequest: Locations = {
    id: 0,
    shortName: '',
    name: '',
    status: 0,
  }
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.GetAllLocations().subscribe({
      next: (locations) => {
        this.location = locations;
        console.log(this.location);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
  ActiveIactiveStatus(id:any,status:any) {
    this.updateStatusRequest.status=status;
    this.updateStatusRequest.id=id;
    this.locationService.activeinactivelocation(this.updateStatusRequest).subscribe({
      next:(respnse)=>{
        console.log(respnse);
      }
    });
  }
}
