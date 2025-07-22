import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    
   message = "Welcome!Relish Your Healthy&Delicious Meal🥗🥗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's get started⬇⬇⬇⬇⬇"; //for event binding

   constructor(private _router: Router){
   }

  getStarted() {   // event binding
    // alert('Get Started Clicked!');
    
       this._router.navigate(['./booking']);
       


  }
  // userName : string='jagadeesh';
  // updateUserName(event: any)
  // {
  //   this.userName=event.target.value;
  // }

}

