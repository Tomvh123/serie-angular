import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../../models/actor.model';


@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {
  @Input() actor: Actor;
  @Input() index: string

  constructor() {

  }

  ngOnInit() {
    this.index = this.actor._id;

  }

}
