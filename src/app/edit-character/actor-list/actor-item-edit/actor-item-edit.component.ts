import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../../actor.model';

@Component({
  selector: 'app-actor-item-edit',
  templateUrl: './actor-item-edit.component.html',
  styleUrls: ['./actor-item-edit.component.css']
})
export class ActorItemEditComponent implements OnInit {

  @Input() actorEdit: Actor;
  @Input() index: string;

  constructor() {
  }

  ngOnInit() {
    // this.index = this.actor._id;
    console.log('init item');
    console.log(this.actorEdit);
  }

}
