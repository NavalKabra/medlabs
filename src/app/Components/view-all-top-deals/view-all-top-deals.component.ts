import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-view-all-top-deals',
  templateUrl: './view-all-top-deals.component.html',
  styleUrls: ['./view-all-top-deals.component.css']
})
export class ViewAllTopDealsComponent implements OnInit {
  TopDealsByCategory:any;
  constructor(private http:HttpService){}


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


}
