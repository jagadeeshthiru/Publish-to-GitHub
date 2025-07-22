import { Component } from '@angular/core';
import { BookingServiceService } from 'src/app/booking-service.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  selectedFoodItems: User[] = [];
  showItems: boolean = false;

  constructor(private bookingService: BookingServiceService) {}

  ngOnInit(): void {}

  // Call when menu item is clicked
  getItemsByFoodId(foodId: string): void {
    this.bookingService.getByFoodId(foodId).subscribe({
      next: (response: User[]) => {
        this.selectedFoodItems = response;
        this.showItems = true;
      },
      error: (error) => {
        console.error('Error fetching menu items:', error);
        this.showItems = false;
      }
    });
  }

}
