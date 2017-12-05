import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../series/character.model';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  @Input() character: Character;
  @Input() serieId: string;
  constructor() { }

  ngOnInit() {
    console.log(this.character.actors[0].name);
  }

}
