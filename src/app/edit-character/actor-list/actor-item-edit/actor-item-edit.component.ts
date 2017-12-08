import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../../actor.model';

@Component({
  selector: 'app-actor-item-edit',
  templateUrl: './actor-item-edit.component.html',
  styleUrls: ['./actor-item-edit.component.css']
})
export class ActorItemEditComponent implements OnInit {
  @Input() actorEdit: Actor;
  @Input() index: string;
  @Output() actorClicked = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
    // this.index = this.actor._id;
    console.log(this.actorEdit);
  }

  onClicked () {
    console.log('click item')
    this.actorClicked.emit();
  }

}
