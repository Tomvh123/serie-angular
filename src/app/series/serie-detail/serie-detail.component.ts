import {Component, OnInit} from '@angular/core';
import {Serie} from '../serie.model';
import {SerieService} from '../serie.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {
  serie: Serie = new Serie({name: 'loading', imagePath: ''});
  id: string;

  constructor(private serieService: SerieService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.serieService.getSerie(this.id).then(res => {
            this.serie = res[0];
          });
        }
      );
  }



}
