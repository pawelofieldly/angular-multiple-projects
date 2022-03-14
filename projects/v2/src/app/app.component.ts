import { Component } from '@angular/core';
import { MySharedService } from '../../../../src/shared/my-shared.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'v2';

  constructor(private my: MySharedService, private indexedDBService: NgxIndexedDBService) {
    this.my.my.subscribe((a: string) => {
      console.log(a);
    });

    // @ts-ignore
    console.log('betweenApp v2', window['betweenApp']);
  }
}
