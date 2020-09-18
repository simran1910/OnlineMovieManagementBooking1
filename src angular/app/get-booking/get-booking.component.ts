import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingForm } from '../booking-form';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-get-booking',
  templateUrl: './get-booking.component.html',
  styleUrls: ['./get-booking.component.css']
})
export class GetBookingComponent implements OnInit {
bookingform:Observable<BookingForm[]>;
contact:string='';
errorMsg:string;
bookings:any = [];

constructor(public movieService:MovieService){}
ngOnInit(): void {
 }

getByContact(){
  this.movieService.getBooking(this.contact).subscribe(data=>{console.log(data); this.errorMsg=undefined;this.bookings=data;},
    error=>{console.log(error);this.errorMsg=error.error.message;});

}
}
