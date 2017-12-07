import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Character} from '../../series/character.model';

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

  constructor() { }

  ngOnInit() {

  }

  onSelected() {
    this.characterSelected.emit();
  }

}
