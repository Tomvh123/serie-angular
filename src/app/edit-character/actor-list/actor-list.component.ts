import { Component, OnInit } from '@angular/core';
import {Actor} from '../../actor.model';
import {SerieService} from '../../series/serie.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors: Actor[];
  subscription: Subscription;

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
