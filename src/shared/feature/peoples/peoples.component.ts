import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { BehaviorSubject, Observable, Subject, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent {
  public bruces$: Observable<Array<{name: string, email: string}>>;
  private getAllRunner$: BehaviorSubject<void>;

  constructor(private indexedDBService: NgxIndexedDBService) {
    this.getAllRunner$ = new BehaviorSubject<void>(void 0);
    this.bruces$ = this.getAllRunner$.pipe(switchMap(() => indexedDBService.getAll<{name: string, email: string}>('people')));
  }

  public addBruce(): void {
    this.indexedDBService.add('people', {
      name: `Bruce Wayne`,
      email: `bruce@wayne.com`,
    }).subscribe();
    this.getAllRunner$.next();
  }
}
