import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { CartService } from 'src/app/cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  
  emitSelectedProduct:BehaviorSubject<number> = new BehaviorSubject(0);
  cartObs= this.emitSelectedProduct.asObservable()
  
  constructor() {
    
   }
   
  
}