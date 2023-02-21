import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/http/http.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-view-all-top-deals',
  templateUrl: './view-all-top-deals.component.html',
  styleUrls: ['./view-all-top-deals.component.css']
})
export class ViewAllTopDealsComponent implements OnInit {
  TopDealsByCategory:any;
  constructor(private http:HttpService, private cart:CartService, private shared:SharedService){}
  

  ngOnInit(): void {
    this.getTopDealsByCategory()
  }

  getTopDealsByCategory(){
    this.http.getDetailsFromServer('top-deals-by-category').subscribe((response:any)=>{
      if(response && response.length > 0){
      this.TopDealsByCategory = response;
      }
    })
  }

  addToCart(product: any) {
    this.cart.addSelectItemToCart(product);
   }

}
