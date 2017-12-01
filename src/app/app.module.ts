import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';

import { SeriesComponent } from './series/series.component';
import { SerieListComponent } from './series/serie-list/serie-list.component';
import { SerieItemComponent } from './series/serie-list/serie-item/serie-item.component';
import {SerieService} from './series/serie.service';
import {HttpModule} from '@angular/http';
import { SerieStartComponent } from './series/serie-list/serie-start/serie-start.component';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeriesComponent,
    SerieListComponent,
    SerieItemComponent,
    SerieStartComponent,
    SerieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [SerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
