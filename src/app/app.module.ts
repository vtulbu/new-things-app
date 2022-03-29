import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AreaComponent } from './components/area/area.component';
import { CardComponent } from './components/card/card.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [AppComponent, AreaComponent, CardComponent, ItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
