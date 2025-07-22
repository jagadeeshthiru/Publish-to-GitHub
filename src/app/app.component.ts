import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'ekart';
   isContactPage = false;

  constructor(private _router: Router){
     this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // If the route contains "contact", show Instagram
        this.isContactPage = event.urlAfterRedirects.includes('/contact');
      }
    });
  }

      
      // headData: string[] = ['Home', 'About', 'Contact'];
      headData = [
  { label: 'Home', path: 'header' },
  { label: 'Menu', path: 'menu'},
  { label: 'About', path: 'about' },
  { label: 'Contact', path: 'contact' },
  
  
  
];
   
  // <a *ngFor="let heading of headData"  [routerLink]="heading.path"  tabindex="0" class="nav-item" > {{ heading.label }}</a> 


  homeClick()
  {
    this._router.navigate(['/header']);
  }
   menuClick()
    {
      this._router.navigate(['./menu'])
    }
  aboutClick()
    {
      this._router.navigate(['/about']);
    }

    contactClick()
    {
      this._router.navigate(['./contact']);
      
    }

    vegBiryaniClick()
    {
      this._router.navigate(['./vegBiryani']);
    }  
    vegStarterClick()
    {
       this._router.navigate(['./vegstarter'])
    }  
  }
