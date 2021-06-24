import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { GeneralListComponent } from './general-list/general-list.component';

const routes: Routes = [
  {
    path: 'record-list',
    component: GeneralListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GeneralListComponent]
})
export class GeneralModule { }