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
  @Input() i : number;
  constructor() {
    console.log();
  }

  ngOnInit() {
    console.log(this.serieId);
    console.log(this.i);

  }

}
