import { Component, OnInit } from '@angular/core';
import { GetDataService } from '@app/services/get-data.service';

import { DataInterface } from '@data/newThings';

interface AreaContent {
  id: number;
  areaId: number;
  sku: string;
  defaultSku: string;
  status: 'open' | 'closed';
  countActive: number;
  joinedWithChild: DataInterface[];
}

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  data: DataInterface[] = [];

  reassembledData: {
    numArea: number;
    areaId: number;
    areaContent: {
      id: number;
      areaId: number;
      sku: string;
      defaultSku: string;
      status: 'open' | 'closed';
      countActive: number;
      joinedWithChild: DataInterface[];
    }[];
  }[] = [];

  uniqueId: {
    id: number;
    areaId: number;
    sku: string;
    defaultSku: string;
    status: 'open' | 'closed';
    countActive: number;
    joinedWithChild: DataInterface[];
  }[] = [];

  numOfZones = this.reassembledData.length;

  alertClickedCard(element: Event) {
    window.alert(
      'You clicked card with sku identificator ' +
        (element.currentTarget as HTMLElement).id
    );
    // implemented simple event function
  }

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.getData().subscribe((data) => {
      this.data = data;

      this.uniqueId = data
        .filter((e) => e.joinedWith === null)
        .map((e) => {
          return {
            id: e.id,
            areaId: e.areaId,
            sku: e.sku,
            defaultSku: e.defaultSku,
            status: e.status,
            countActive: e.countActive,
            joinedWithChild: [
              ...data.filter((element) => element.joinedWith === e.id),
            ],
          };
        });

      this.reassembledData = [...new Set(this.data.map((e) => e.areaId))].map(
        (e, i) => {
          switch (e) {
            case 1791:
              return {
                numArea: 1,
                areaId: e,
                areaContent: this.uniqueId.filter(
                  (element: { areaId: number }) => element.areaId === e
                ),
              };
            case 1892:
              return {
                numArea: 2,
                areaId: e,
                areaContent: this.uniqueId.filter(
                  (element: { areaId: number }) => element.areaId === e
                ),
              };
            case 1900:
              return {
                numArea: 4,
                areaId: e,
                areaContent: this.uniqueId.filter(
                  (element: { areaId: number }) => element.areaId === e
                ),
              };
            case 1901:
              return {
                numArea: 5,
                areaId: e,
                areaContent: this.uniqueId.filter(
                  (element: { areaId: number }) => element.areaId === e
                ),
              };
            default:
              return {
                numArea: this.numOfZones + i + 2,
                areaId: e,
                areaContent: this.uniqueId.filter(
                  (element: { areaId: number }) => element.areaId === e
                ),
              }; // in case additional area is added
          }
        }
      );
      console.log(this.reassembledData);
    });
  }
}
