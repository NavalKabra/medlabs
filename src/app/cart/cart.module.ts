import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsComponent } from './booking-details/booking-details.component';


@NgModule({
  declarations: [
    CartComponent,
    BookingDetailsComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
