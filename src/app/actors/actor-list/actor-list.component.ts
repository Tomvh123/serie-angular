import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {Actor} from '../../actor.model';
import {ActorService} from '../actor-service.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit, OnDestroy {
  actors: Actor[];
  subscription: Subscription;

  constructor(private actorService: ActorService,
              private router: Router,
              private route: ActivatedRoute) { }

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

  onNewActor() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
