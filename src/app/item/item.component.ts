import { Component, Input ,Output ,EventEmitter} from '@angular/core';
import {Item} from '../item' ;
import {Cart} from '../cart';
@Component({
  selector: 'app-item',
  template: ` 



  <li class="box" *ngFor="let item of shoppingItems">
    {{item.name}} <br>
    <img src="{{item.photo}}" width="60" height="60">
    <br>
    <span>Price: {{item.price}}</span>
    <br>
    <button (click)="buy(item)">Buy</button>
  </li>

  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {

  constructor() { }
	@Input() shoppingItems:Item[];
	@Output() onBuy  = new EventEmitter();
	buy(item:Item) {
		console.log(item);
		this.onBuy.emit(item);
	}

}
