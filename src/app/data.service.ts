import { Injectable } from '@angular/core';
import {Item} from './item'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
var tomatoPhoto : string = "https://cdn.shopify.com/s/files/1/1380/2059/products/Cherry-Tomato.jpg?v=1480318422"; 
var orangePhoto : string =  "http://sportsvape.net/wp-content/uploads/2014/09/Orange.jpg"
var breadPhoto : string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIQy0f1F6b-QOMcgjWZHXFdMYA99pFn87frvcqEqOcu3HsF6Ldg" ; 
var milkPhoto : string = "http://www.camperdowndairy.com.au/wp-content/uploads/2015/11/milk500.jpg" ; 


@Injectable({
  providedIn: 'root'
})
export class DataService {
constructor (private http: HttpClient) {}
public json= "http://localhost:3000/items/" ; 
//public json= "https://api.myjson.com/bins/hrzgc" ; 

public getServerData():Observable<Item[]> {
	return this.http.get<Item[]>(this.json);
}

	public items: Item[] = [
	{ name : "tomatos" , photo : tomatoPhoto  , bought : false , price : 10} ,
	{ name : "orange" , photo : orangePhoto , bought : false  , price : 20} , 
	{ name : "bread" , photo : breadPhoto , bought : false  , price : 30} , 
	{ name : "milk" , photo : milkPhoto , bought : false  , price : 40} ,
	{ name : "milk" , photo : milkPhoto , bought : false  , price : 40} , 
	{ name : "milk" , photo : milkPhoto , bought : false  , price : 40} , 
 	];

public getData() {
	return this.items;
}

}
