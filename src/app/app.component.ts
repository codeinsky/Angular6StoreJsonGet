
import { Component } from '@angular/core';
import {Cart} from './cart';
import {Item} from './item' ;
import {DataService} from './data.service'
// var tomatoPhoto : string = "https://cdn.shopify.com/s/files/1/1380/2059/products/Cherry-Tomato.jpg?v=1480318422"; 
// var orangePhoto : string =  "http://sportsvape.net/wp-content/uploads/2014/09/Orange.jpg"
// var breadPhoto : string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIQy0f1F6b-QOMcgjWZHXFdMYA99pFn87frvcqEqOcu3HsF6Ldg" ; 
// var milkPhoto : string = "http://www.camperdowndairy.com.au/wp-content/uploads/2015/11/milk500.jpg" ; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public items:Item[];
constructor(private data:DataService){
//this.items = data.getData();
this.data.getServerData().subscribe(data => this.items = data);
//this.data.getServerData().subscribe(function(data){this.items = data});

console.log(JSON.stringify(this.items));
}

// public items: Item[] = [
// { name : "tomato" , photo : tomatoPhoto  , bought : false , price : 10} ,
// { name : "orange" , photo : orangePhoto , bought : false  , price : 20} , 
// { name : "bread" , photo : breadPhoto , bought : false  , price : 30} , 
// { name : "milk" , photo : milkPhoto , bought : false  , price : 40}
// ];

public cart : Cart = {
	items : [], finalPrice : 0
}


public buy(item:Item): void{
console.log("buy");
this.cart.finalPrice = this.cart.finalPrice + item.price; 
this.cart.items.push(item.name);
console.log(this.cart.items);

}
}
