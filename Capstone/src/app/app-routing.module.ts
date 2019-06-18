import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './CoreModule/header/header.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { HotelSearchComponent } from './Booking/hotel-search/hotel-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/mybooking', pathMatch: 'full' },
  { path: 'mybooking', component:HeaderComponent},
  { path: 'hotelsearch', component:HotelSearchComponent},
  { path: 'signin', component:SignInComponent  },
  { path: 'signup', component:SignUpComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
