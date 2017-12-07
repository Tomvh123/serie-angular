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
import { AdvancedComponent } from './advanced/advanced.component';
import { CharacterItemComponent } from './advanced/character-item/character-item.component';
import { CharacterDetailComponent } from './advanced/character-detail/character-detail.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';

import { EditSerieComponent } from './edit-serie/edit-serie.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditCharacterComponent } from './edit-character/edit-character.component';
import { ActorListComponent } from './edit-character/actor-list/actor-list.component';
import { ActorItemEditComponent } from './edit-character/actor-list/actor-item-edit/actor-item-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeriesComponent,
    SerieListComponent,
    SerieItemComponent,
    SerieStartComponent,
    SerieDetailComponent,
    AdvancedComponent,
    CharacterItemComponent,
    CharacterDetailComponent,
    PageNotFountComponent,
    EditSerieComponent,
    EditCharacterComponent,
    ActorListComponent,
    ActorItemEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [SerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
