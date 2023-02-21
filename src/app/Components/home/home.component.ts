import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { AutoHeightService } from 'ngx-owl-carousel-o/lib/services/autoheight.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  constructor(private viewportScroller: ViewportScroller) { }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
