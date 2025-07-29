import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService
{
  private apiUrl = 'http://localhost:8080/api/restaurantss';    
  
  constructor(private http: HttpClient) {}

  saveBooking(data: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/booking`, data);
  }
  reviewLooking(data:User): Observable<any>
  {
    return this.http.post(`${this.apiUrl}/review`,data);
  }

   getByFoodId(foodId: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/${foodId}`);
  }

   getComboData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/combo`);
  }
  getStarter(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.apiUrl}/starters`)
  }
 
  getDesserts(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.apiUrl}/Desserts`)
  }
  
}
