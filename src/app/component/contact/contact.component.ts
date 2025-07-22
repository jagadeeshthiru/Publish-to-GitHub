import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookingServiceService } from 'src/app/booking-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private bookingService: BookingServiceService) {}
  

  //  getStarted() {   // event binding
  //   alert(' Message sent! We’ll be in touch shortly!😊📬📩✨');
  // }

  

  formGroup = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });

   getclickIt() {
     const userData: User = this.formGroup.value as User;
   
     this.bookingService.reviewLooking(userData).subscribe(
       response => {
         console.log('Booking saved!', response);
         alert('Message sent! We’ll be in touch shortly!😊📩');
         this.formGroup.reset();
       },
       error => {
         console.error('Error saving booking:', error);
         alert('Something went wrong!');
       }
     );
   }
   
}
