import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SerieService} from '../series/serie.service';
import {Serie} from '../series/serie.model';
import {Character} from '../series/character.model';


@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit {
  serie: Serie = new Serie({name: 'loading', imagePath: ''});
  character: Character;
  index: number;


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
            console.log(this.serie);
          });
        }
      );
  }

  onSerieSelected(character: Character) {
    this.character = character;
    console.log(character);

  }
  onSerieDelete() {
    this.serieService.deleteSerie(this.id);
    this.router.navigate(['/series']);
  }

  onCharDelete(i : number) {
    this.serie.characters.splice(i, i + 1);
    this.serieService.updateSerie(this.id, this.serie);


  }



}
