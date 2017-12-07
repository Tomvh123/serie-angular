import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../series/character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character;
  @Input() serieId: string;
  @Input() i : number;
  constructor() {
    console.log();
  }

  ngOnInit() {
    console.log(this.serieId);
    console.log(this.i);

  }

}
