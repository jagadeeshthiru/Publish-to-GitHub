import { Component } from '@angular/core';
import { BookingServiceService } from 'src/app/booking-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-vegstarter',
  templateUrl: './vegstarter.component.html',
  styleUrls: ['./vegstarter.component.css']
})

export class VegstarterComponent {

  items: User[] = [];
    errorMessage = '';
    
    constructor(private bookingService: BookingServiceService) { }
  
    ngOnInit(): void {
      this.bookingService.getByFoodId('vegStarter').subscribe({
        next: data => this.items = data,
        error: err => {
          console.error(err);
          this.errorMessage = 'Failed to load Veg‑Biryani items.';
          alert("something went wrong!")
        }
      });
    }
}
