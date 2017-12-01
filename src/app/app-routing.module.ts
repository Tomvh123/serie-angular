import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeriesComponent} from './series/series.component';
import {SerieStartComponent} from './series/serie-list/serie-start/serie-start.component';
import {SerieDetailComponent} from './series/serie-detail/serie-detail.component';
import {AdvancedComponent} from './advanced/advanced.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/series', pathMatch: 'full'},
  {path: 'series', component: SeriesComponent, children: [
    {path: '', component: SerieStartComponent},
    {path: ':id', component: SerieDetailComponent}
  ]},
  {path: 'advanced/:id', component: AdvancedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
