import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordListComponent } from './record-list/record-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecordListComponent],
  exports: [RecordListComponent]
})
export class SharedModule { }