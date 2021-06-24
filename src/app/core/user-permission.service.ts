import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserPermissionService {
  private isAdminValue: boolean = false;
  constructor() { }

  isAdmin(): boolean {
    if(!this.isAdminValue) {
      this.isAdminValue = Math.random() % 2 === 0;
    }
    return this.isAdminValue;
  }

}