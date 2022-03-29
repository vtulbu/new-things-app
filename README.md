# NewThingsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Back-end database server

Run `npm run server` to start json server and to get data for front-end. To see data navigate to `http://localhost:5000/`. Data are located in`data/new-things.json`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Overview and process details

1. Data is requested through GetDataService`src/app/services/get-data.service.ts`. In case data is missing, an error is thrown.
2. Data is passed to the area component ts file, after being processed and reassembled properly according to the following structure.

   2.1 Structure of data passed:
   ----Area
   ------Array of Unique IDs for each area
   --------Array of child that joined with Unique ID

   2.2 Interface of data:
   ----numArea: number;
   ----areaId: number;
   ----cardContent: {
   --------id: number;
   --------areaId: number;
   --------sku: string;
   --------defaultSku: string;
   --------status: 'open' | 'closed';
   --------countActive: number;
   --------joinedWithChild:{
   ------------id: number;
   ------------areaId: number;
   ------------joinedWith: number | null;
   ------------sku: string;
   ------------defaultSku: string;
   ------------status: 'open' | 'closed';
   ------------countActive: number;
   }[];
   }[].

3. With ngFor directive are created areas and are passed cardContent array to card component.
4. In card component are created card containers(with ngFor directive) which correspond to the number of unique IDs for each area.

   4.1.Additionaly card component run a function that establish what are status of group or unique ID to apply left indicator accordingly (open: green, closed: red, neutral: orange)
   
5. Finally, data is passed to the item component which inserts sku and defaultSku in 2 paragraphs.
