import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemName: string;
  detailOpened: boolean;

  constructor() { }

  showDetail(open: boolean) {
    document.body.classList.remove('item-detail-opened');

    if (open) {
      document.body.classList.add('item-detail-opened');
    }
    this.detailOpened = open;
  }
}
