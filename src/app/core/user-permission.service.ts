import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserPermissionService {
  private isAdminValue: boolean = false;
  constructor() { }

  isAdmin(): boolean {
    if(!this.isAdminValue) {
      const num = Math.floor(Math.random() * 100) + 1;
      console.log('Random number', num);
      this.isAdminValue = num % 2 === 0;
    }
    return this.isAdminValue;
  }

}