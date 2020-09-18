import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {
 bookId:string;
  msg:string;
  errorMsg:string;
  constructor(private movieService:MovieService, private route:ActivatedRoute){}
  
  ngOnInit(){
  
  }
  cancelBooking(){
    this.movieService.cancelBooking(this.bookId).subscribe(data=>{console.log(data);this.msg=data.message; this.errorMsg=undefined}, 
    error=>{console.log(error);this.errorMsg = error.error.message;this.msg=undefined})
  }
  

}
