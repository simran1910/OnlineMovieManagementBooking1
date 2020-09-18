import { Injectable } from '@angular/core';
import { BookingForm } from './booking-form';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieConstants } from './movie-constants';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  

  constructor(private http:HttpClient){
    
  }

  addBooking(bookingForm:BookingForm):Observable<any>{
        return this.http.post(MovieConstants.ADD_BOOKING_URL, bookingForm );
  }
  cancelBooking(bookId:string):Observable<any>{
        return this.http.delete(MovieConstants.CANCEL_BOOKING_URL + bookId );
  }
  getBooking(contact:string):Observable<any>{
    return this.http.get(MovieConstants.GET_BOOKING_URL + contact);
  }
   
}
