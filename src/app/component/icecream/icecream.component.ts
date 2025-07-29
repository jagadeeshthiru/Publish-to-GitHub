import { Component } from '@angular/core';
import { BookingServiceService } from 'src/app/booking-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-icecream',
  templateUrl: './icecream.component.html',
  styleUrls: ['./icecream.component.css']
})
export class IcecreamComponent {

 items: User[] = [];
   errorMessage = '';
 
   constructor(private bookingService: BookingServiceService) { }
 
   ngOnInit(): void {
     this.bookingService.getByFoodId('Icecream').subscribe({
       next: data => this.items = data,
       error: err => {
         console.error(err);
         this.errorMessage = 'Failed to load Veg‑Biryani items.';
         alert("something went wrong!")
       }
     });
    }

}
