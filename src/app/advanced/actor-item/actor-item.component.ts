import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Character} from '../../series/character.model';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {
@Input() character: Character;
@Input() serieId: string;
@Output() characterSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.characterSelected.emit();
  }

}
