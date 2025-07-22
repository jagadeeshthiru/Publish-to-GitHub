import { Component } from '@angular/core';
import { BookingServiceService } from 'src/app/booking-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-vegbiryani',
  templateUrl: './vegbiryani.component.html',
  styleUrls: ['./vegbiryani.component.css']
})
export class VegbiryaniComponent {
  items: User[] = [];
  errorMessage = '';

  constructor(private bookingService: BookingServiceService) { }

  ngOnInit(): void {
    this.bookingService.getByFoodId('vegBiryani').subscribe({
      next: data => this.items = data,
      error: err => {
        console.error(err);
        this.errorMessage = 'Failed to load Veg‑Biryani items.';
        alert("something went wrong!")
      }
    });
  }

}
