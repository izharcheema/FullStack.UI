import { Component, OnInit } from '@angular/core';
import { Internal_User } from 'src/app/Models/internal-user.model';
import { InternalUserService } from 'src/app/services/internal-user.service';

@Component({
  selector: 'app-internal-userlist',
  templateUrl: './internal-userlist.component.html',
  styleUrls: ['./internal-userlist.component.css']
})
export class InternalUserlistComponent implements OnInit {
  internaluser: Internal_User[] = [];
  constructor(private internalusersevice: InternalUserService) { }

  ngOnInit(): void {
    this.internalusersevice.GetAllInternalUsers().subscribe({
      next: (internaluser) => {
        this.internaluser = internaluser;
        console.log(this.internaluser);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}