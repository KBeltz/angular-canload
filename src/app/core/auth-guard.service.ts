import { Injectable } from "@angular/core";
import { CanLoad, Route } from "@angular/router";
import { UserPermissionService } from "./user-permission.service";

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanLoad {
  unauthorised: string = 'You are not authorised to visit this page'
  constructor(private userPermissionService: UserPermissionService) { }

  canLoad(route: Route) {
    const isAdmin = this.userPermissionService.isAdmin();
    console.log('route.path', route.path, isAdmin)
    if(route.path.includes('admin')) {
      !isAdmin && alert(this.unauthorised);
      return isAdmin;
    } else if(route.path.includes('general')) {
      isAdmin && alert(this.unauthorised);
      return !isAdmin;
    }
  }
}