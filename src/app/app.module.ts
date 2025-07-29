import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
// import { FormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { MenuComponent } from './component/menu/menu.component';
import { BookingComponent } from './component/booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VegbiryaniComponent } from './component/vegbiryani/vegbiryani.component';
import { VegstarterComponent } from './component/vegstarter/vegstarter.component';
import { NonvegbiryaniComponent } from './component/nonvegbiryani/nonvegbiryani.component';
import { NonvegstarterComponent } from './component/nonvegstarter/nonvegstarter.component';
import { DessertsandsnacksComponent } from './component/dessertsandsnacks/dessertsandsnacks.component';
import { IcecreamComponent } from './component/icecream/icecream.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    FooterComponent,
        AboutComponent,
        ContactComponent,
        MenuComponent,
        BookingComponent,
        VegbiryaniComponent,
        VegstarterComponent,
        NonvegbiryaniComponent,
        NonvegstarterComponent,
        DessertsandsnacksComponent,
        IcecreamComponent,
        
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
