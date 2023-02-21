import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PageerrorComponent } from './Components/pageerror/pageerror.component';
import { HomeComponent } from './Components/home/home.component';
import { MedicineHomeComponent } from './Components/medicine-home/medicine-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopDealsComponent } from './Components/top-deals/top-deals.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductDetailsComponent } from './Components/view-product-details/view-product-details.component';
import { MedHomeAdSliderComponent } from './Components/med-home-ad-slider/med-home-ad-slider.component';
import { ViewAllTopDealsComponent } from './Components/view-all-top-deals/view-all-top-deals.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './Components/header/header.component';
import { CartModule } from './cart/cart.module';
import { ConfirmOrderComponent } from './cart/confirm-order/confirm-order.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageerrorComponent,
    HomeComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    ViewProductDetailsComponent,
    MedHomeAdSliderComponent,
    ViewAllTopDealsComponent,
    ConfirmOrderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    SharedModule,
    CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
