import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private cartCount = new BehaviorSubject(0);
  currentCartCount = this.cartCount.asObservable();
  constructor() { }

  changeCount(count:number) {
      console.log("Countinservice***",count)
    this.cartCount.next(count)
  }

}