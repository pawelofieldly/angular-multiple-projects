import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "platform"
})
export class MySharedService {
  public my: BehaviorSubject<string> = new BehaviorSubject<string>('blady');
}

