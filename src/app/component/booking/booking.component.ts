import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookingServiceService } from 'src/app/booking-service.service';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

 numbers: number[] = [];
table: number[] = [];

constructor(private bookingService: BookingServiceService) {}

ngOnInit() 
{
  for (let i = 1; i <= 10; i++) 
  {
    this.numbers.push(i);
  }
  
  for (let i = 1; i <= 4; i++) 
  {
    this.table.push(i);
  }
}

  
  getclickItButton() 
  {   // event binding
    alert('Your table has been successfully booked!');
  }
   
  




formGroup = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    numberOfPeople: new FormControl(0),
    numberOfTables: new FormControl(0),
    message: new FormControl('')
  });
  


  getclickIt() {
  const userData: User = this.formGroup.value as User;

  this.bookingService.saveBooking(userData).subscribe(
    response => {
      console.log('Booking saved!', response);
      alert('Booking successful!');
      this.formGroup.reset();
    },
    error => {
      console.error('Error saving booking:', error);
      alert('Something went wrong!');
    }
  );
}

}
