import { Component, OnInit } from '@angular/core';
import { UserPermissionService } from './core/user-permission.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  isAdmin: boolean = true;
  constructor(private userPermissionService: UserPermissionService){}
  ngOnInit(){
    this.isAdmin = this.userPermissionService.isAdmin();
  }
}
