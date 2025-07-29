import { Component } from '@angular/core';
import { BookingServiceService } from 'src/app/booking-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-nonvegstarter',
  templateUrl: './nonvegstarter.component.html',
  styleUrls: ['./nonvegstarter.component.css']
})
export class NonvegstarterComponent {
 items: User[] = [];
    errorMessage = '';
    
    constructor(private bookingService: BookingServiceService) { }
  
    ngOnInit(): void {
      this.bookingService. getStarter().subscribe({
        next: data => this.items = data,
        error: err => {
          console.error(err);
          this.errorMessage = 'Failed to load Veg‑Biryani items.';
          alert("something went wrong!")
        }
      });
    }
}
