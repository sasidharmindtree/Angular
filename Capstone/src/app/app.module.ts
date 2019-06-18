import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BookingListComponent } from './Booking/booking-list/booking-list.component';
import { SearchComponent } from './Booking/search/search.component';
import { FilterComponent } from './Booking/filter/filter.component';
import { BookingViewComponent } from './Booking/booking-view/booking-view.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { BookingItemComponent } from './Booking/booking-item/booking-item.component';
import { AppRoutingModule } from './app-routing.module'
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './CoreModule/header/header.component';
import { HotelSearchComponent } from './Booking/hotel-search/hotel-search.component';

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
    HotelSearchComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatSliderModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    AppRoutingModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
