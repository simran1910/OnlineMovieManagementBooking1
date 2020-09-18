import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { GetBookingComponent } from './get-booking/get-booking.component';


const routes: Routes = [
{path:'addbooking',component: AddBookingComponent},
{path:'cancelbooking',component: CancelBookingComponent},
{path:'getbooking',component:GetBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

