import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'record-list',
    component: AdminListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminListComponent]
})
export class AdminModule { }