import { Component, Input , Output } from '@angular/core';
import {Item} from '../item' ;

@Component({
  selector: 'app-cart',
  template: `
  <div>
  <img src="http://learnmongodbthehardway.com/images/originals/shopping_cart_racing.png" width="20" height="20">
   <span> Final price : {{price}} NIS</span> <br>
   <button (click)="show = !show">Shopping list</button>
  <ul *ngIf="show">
    <li *ngFor="let item of cartItems">{{item}}</li>
  </ul>
</div>
  `,
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
	@Input() price :number ; 
	@Input() cartItems: String[];
  constructor() { }

}
