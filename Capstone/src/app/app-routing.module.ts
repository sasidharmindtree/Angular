import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './CoreModule/header/header.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { SearchComponent } from './Booking/search/search.component';
import { BookingViewComponent } from './Booking/booking-view/booking-view.component';
import { BookingListComponent } from './Booking/booking-list/booking-list.component';
import { ProfileComponent } from './myprofile/profile/profile.component';
import { BookingitemNowComponent } from './Booking/bookingitem-now/bookingitem-now.component';


const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'mybooking', component: BookingListComponent},
  { path: 'search', component: SearchComponent},
  { path: 'bookview/:id', component: BookingViewComponent},
  { path: 'signin', component: SignInComponent  },
  { path: 'signup', component: SignUpComponent  },
  { path: 'profile', component: ProfileComponent  },
  { path: 'history', component: BookingitemNowComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
