import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { HeaderComponent } from './component/header/header.component';
import { ContactComponent } from './component/contact/contact.component';

import { MenuComponent } from './component/menu/menu.component';
import { BookingComponent } from './component/booking/booking.component';
import { VegbiryaniComponent } from './component/vegbiryani/vegbiryani.component';
import { VegstarterComponent } from './component/vegstarter/vegstarter.component';


 

const routes: Routes = [
{ path: '', redirectTo:'/app-root',pathMatch:'full'},
{ path: 'about', component: AboutComponent },
{ path: 'header', component: HeaderComponent },
{path:'menu', component: MenuComponent},
{ path: 'footer', component: FooterComponent},
{ path: 'contact',component: ContactComponent},
{path:'booking',component: BookingComponent},
{ path: 'vegbiryani', component:VegbiryaniComponent},
{ path:'vegstarter', component:VegstarterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
