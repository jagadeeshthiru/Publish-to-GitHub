import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookingServiceService } from 'src/app/booking-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-nonvegbiryani',
  templateUrl: './nonvegbiryani.component.html',
  styleUrls: ['./nonvegbiryani.component.css']
})
export class NonvegbiryaniComponent {
   
  items: User[] = [];
  errorMessage = '';

  constructor(private bookingService: BookingServiceService) {}

  ngOnInit(): void {
    this.bookingService.getComboData().subscribe({
      next: data => {
        this.items = data;
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
        this.errorMessage = 'Failed to load combo menu items.';
        alert("Something went wrong while loading combo items!");
      }
    });
  }

}
