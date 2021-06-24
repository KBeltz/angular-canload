import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRecord } from '../shared/interface';

@Injectable({ providedIn: 'root' })
export class RecordListService {

  constructor() { }

  getRecordList(isAdmin: boolean): Observable<IRecord[]> {
    if(isAdmin) {
      return of([
        { id: 1, name: 'Admin1 Person' },
        { id: 2, name: 'Admin2 Person' },
        { id: 3, name: 'Admin3 Person' },
      ]) as Observable<IRecord[]>
    } else {
      return of([
        { id: 4, name: 'General1 Person' },
        { id: 5, name: 'General2 Person' },
        { id: 6, name: 'General3 Person' },
      ]) as Observable<IRecord[]>
    }
  }

}