import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { DataServiceService} from './data-service.service'

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
