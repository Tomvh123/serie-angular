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
  // creator: Creator;

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
            this.serie = res;
            console.log(res);
          });
        }
      );
  }

  onSerieSelected(character: Character) {
    console.log('click2');
    this.character = character;
    console.log(character);

  }
  onSerieDelete() {
    this.serieService.deleteSerie(this.id);
    this.router.navigate(['/series']);
  }



}
