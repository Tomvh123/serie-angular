import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeriesComponent} from './series/series.component';
import {SerieStartComponent} from './series/serie-list/serie-start/serie-start.component';
import {SerieDetailComponent} from './series/serie-detail/serie-detail.component';
import {AdvancedComponent} from './advanced/advanced.component';
import {ActorDetailComponent} from './advanced/actor-detail/actor-detail.component';
import {PageNotFountComponent} from './page-not-fount/page-not-fount.component';
import {EditSerieComponent} from './edit-serie/edit-serie.component';
import {EditCharacterComponent} from './edit-character/edit-character.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/series', pathMatch: 'full'},
  {
    path: 'series', component: SeriesComponent, children: [
    {path: '', component: SerieStartComponent},
    {path: ':id', component: SerieDetailComponent}]
  },
  {
    path: 'advanced/:id', component: AdvancedComponent
  },

  {path: 'edit', component: EditSerieComponent},
  {path: 'edit/:id', component: EditSerieComponent},
  {path: 'editChar/:id', component: EditCharacterComponent},
  {path: 'editChar/:id/:charid', component: EditCharacterComponent},
  {path: '**', component: PageNotFountComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
