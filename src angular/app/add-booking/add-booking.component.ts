import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingForm } from '../booking-form';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  @ViewChild("frm")
  form:NgForm;
  msg:string;
  errorMsg:string;
  bookingForm:BookingForm = new BookingForm();
  addBookingFlag:boolean;
  viewBookingFlag:Boolean;


  constructor(public movieService:MovieService) { }

  ngOnInit(): void {
  }
  addBooking(){
    this.movieService.addBooking(this.bookingForm).subscribe(data=>{this.msg = data.message;console.log(data);
    this.form.resetForm() ; this.errorMsg=undefined},
    error=>{console.log(error);this.errorMsg= error.error.message; this.msg=undefined});
    }
  }

