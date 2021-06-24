import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserPermissionService {
  private isAdminValue: number;
  constructor() { }

  isAdmin(): boolean {
    if(!this.isAdminValue) {
      this.isAdminValue = Math.floor(Math.random() * 100) + 1;
      console.log('Random number', this.isAdminValue);
    }
    return this.isAdminValue % 2 === 0;
  }

}