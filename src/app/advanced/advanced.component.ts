import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SerieService} from '../services/serie.service';
import {Serie} from '../models/serie.model';
import {Character} from '../models/character.model';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit, OnDestroy {
  serie: Serie = new Serie({name: 'loading', imagePath: ''});
  character: Character;
  index: number;
  relSerie: Serie[];
  subsription: Subscription;


  id: string;

  constructor(private serieService: SerieService,
              private route: ActivatedRoute,
              private router: Router) {
    console.log('advanced');
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.serieService.getSerie(this.id).then(res => {
            this.serie = res;
          }).then(() => this.serieService.getSeriesRel(this.serie.genre)
            .then((res) => this.relSerie = res));
        }
      );
    this.subsription = this.serieService.charChanged
      .subscribe(
        () => {
          this.serieService.getSerie(this.id)
            .then(() => {
              this.serieService.getSerie(this.id).then(res => {
                this.serie = res;
              });
            });
        }
      );
    this.character = null;
    console.log(this.character);

  }

  onSerieSelected(character: Character) {
    this.character = character;

  }
  onSerieDelete() {
    this.serieService.deleteSerie(this.id);
    this.router.navigate(['/series']);
  }

  onCharDelete(i : number) {
    this.serie.characters.splice(i, i + 1);
    this.serieService.updateSerie(this.id, this.serie);


  }

  ngOnDestroy() {
    this.subsription.unsubscribe();
  }



}
