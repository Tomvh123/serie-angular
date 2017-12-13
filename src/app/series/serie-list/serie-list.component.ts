import {Component, OnDestroy, OnInit} from '@angular/core';
import {Serie} from '../../models/serie.model';
import {Subscription} from 'rxjs/Subscription';
import {SerieService} from '../../services/serie.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit, OnDestroy {
  series: Serie[];
  subscription: Subscription;
  filteredStatus = '';

  constructor(private serieService: SerieService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.serieService.serieChanged
      .subscribe(
        (series: Serie[]) => {
          this.serieService.getSeries()
            .then(res => {
              this.series = res;
            });
        }
      );
    this.serieService.getSeries().then(res => {
      this.series = res;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
