import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordListService } from '../../core/record-list.service';
import { IRecord } from '../interface';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  @Input() isAdmin: boolean;
  public recordList$: Observable<IRecord[]>;
  constructor(private recordListService: RecordListService) { }

  ngOnInit() {
    this.recordList$ = this.recordListService.getRecordList(this.isAdmin);
  }

}