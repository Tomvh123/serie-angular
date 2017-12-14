import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Actor} from '../../models/actor.model';
import {SerieService} from '../../services/serie.service';
import {Subscription} from 'rxjs/Subscription';
import {ActorService} from '../../services/actor-service.service';

@Component({
  selector: 'app-actor-edit-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListEditComponent implements OnInit {
  actors: Actor[];
  subscription: Subscription;
  @Output() actorClicked = new EventEmitter<Actor>();

  constructor(private serieService: SerieService,
  private actorService: ActorService) { }

  ngOnInit() {

    this.subscription = this.actorService.actorChanged
      .subscribe(
        (actors: Actor[]) => {
          this.actorService.getActors()
            .then(res => {
              this.actors = res;
            });
        }
      );
    this.actorService.getActors().then(res => {
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
