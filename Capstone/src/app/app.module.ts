import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';
import { AppComponent } from './app.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { BookingListComponent } from './Booking/booking-list/booking-list.component';
import { SearchComponent } from './Booking/search/search.component';
import { FilterComponent } from './Booking/filter/filter.component';
import { BookingViewComponent } from './Booking/booking-view/booking-view.component';
import { BookingItemComponent } from './Booking/booking-item/booking-item.component';
import { HeaderComponent } from './CoreModule/header/header.component';
import { HotelSearchComponent } from './Booking/hotel-search/hotel-search.component';
import { ProfileComponent } from './myprofile/profile/profile.component';
import { BookingitemNowComponent } from './Booking/bookingitem-now/bookingitem-now.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    BookingListComponent,
    SearchComponent,
    FilterComponent,
    BookingViewComponent,
    BookingItemComponent,
    HeaderComponent,
    HotelSearchComponent,
    ProfileComponent,
    BookingitemNowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
