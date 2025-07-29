import { Component } from '@angular/core';
import { BookingServiceService } from 'src/app/booking-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dessertsandsnacks',
  templateUrl: './dessertsandsnacks.component.html',
  styleUrls: ['./dessertsandsnacks.component.css']
})
export class DessertsandsnacksComponent {
  
items: User[] = [];
    errorMessage = '';
    
    constructor(private bookingService: BookingServiceService) { }
  
    ngOnInit(): void {
      this.bookingService.  getDesserts().subscribe({
        next: data => this.items = data,
        error: err => {
          console.error(err);
          this.errorMessage = 'Failed to load Veg‑Biryani items.';
          alert("something went wrong!")
        }
      });
    }

}
