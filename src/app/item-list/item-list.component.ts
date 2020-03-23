import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  myList = [];

  constructor() {
    for (let i = 0; i < 50; i++) {
      this.myList.push('Item ' + i);
    }
   }
}
