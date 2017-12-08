import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Actor} from '../../actor.model';
import {SerieService} from '../../series/serie.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-actor-edit-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListEditComponent implements OnInit {
  actors: Actor[];
  subscription: Subscription;
  @Output() actorClicked = new EventEmitter<Actor>();

  constructor(private serieService: SerieService) { }

  ngOnInit() {

    this.subscription = this.serieService.actorChanged
      .subscribe(
        (actors: Actor[]) => {
          this.serieService.getActors()
            .then(res => {
              this.actors = res;
            });
        }
      );
    this.serieService.getActors().then(res => {
      this.actors = res;
    });


  }

  onActorClicked(actor: Actor) {

    this.actorClicked.emit(actor);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
