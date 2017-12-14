import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Character} from '../../models/character.model';
import {isNumber} from 'util';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {
@Input() character: Character;
@Input() serieId: string;
@Input() index: number;
@Output() characterSelected = new EventEmitter<void>();
@Output() characterDelete = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {

  }

  onSelected() {
    this.characterSelected.emit();
  }

  onCharClicked() {
    this.characterDelete.emit();
  }


}
