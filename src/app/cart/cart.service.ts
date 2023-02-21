import { Injectable } from '@angular/core';
import { SharedService } from '../shared/service/shared.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private orderObj:any;

  constructor(private shared:SharedService) { }

  addSelectItemToCart(product:any){
    var products:any;
    products = localStorage.getItem("products");
    products = JSON.parse(products);
    if(!products){
      products = [];
    }
    products.push(product);
    console.log('produts',products);
    console.log('string',JSON.stringify(products));
    localStorage.setItem("products",JSON.stringify(products));
    this.shared.emitSelectedProduct.next(products.length);
  }

  setOrder(order:any){
    this.orderObj = order;
  }

  getOrder(){
    return this.orderObj ;
  }

  removeProductsFromLocalStorage(){
    localStorage.removeItem('products');
  }
}
