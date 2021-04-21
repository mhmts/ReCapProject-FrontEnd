import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';

import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';

import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
  
    CustomerComponent,
    NaviComponent,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
   
    
     
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
