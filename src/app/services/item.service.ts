import { Injectable } from '@angular/core';
import { Item } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
      {
        id: 0,
        title: 'Manzana' ,
        price: 14.5,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        title: 'pan',
        price: 12.5,
        quantity: 5,
        completed: true
      }
  ];

  constructor() { }

  getItems(){

    return this.items;
  }

  addItem(item: Item){
    this.items.unshift(item);
    
  }
}
