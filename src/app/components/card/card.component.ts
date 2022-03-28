import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataInterface } from '@data/newThings';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() numArea!: number;
  @Input() contentCard!: {
    id: number;
    areaId: number;
    sku: string;
    defaultSku: string;
    status: 'open' | 'closed';
    countActive: number;
    joinedWithChild: DataInterface[];
  }[];

  @Output() onCLick: EventEmitter<Event> = new EventEmitter();

  statusOfCard!: string[];

  constructor() {}

  ngOnInit(): void {
    this.statusOfCard = this.contentCard.map((e) => {
      if (e.status === 'open') {
        return e.joinedWithChild.every((e) => e.status === 'open')
          ? 'open'
          : 'orange';
      } else {
        return e.joinedWithChild.every((e) => e.status === 'closed')
          ? 'closed'
          : 'orange';
      }
    });
  }

  onClick(e: Event) {
    this.onCLick.emit(e);
  }
}
