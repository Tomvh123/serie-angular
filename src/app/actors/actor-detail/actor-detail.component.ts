import { Component, OnInit } from '@angular/core';
import {Actor} from '../../models/actor.model';
import {ActorService} from '../../services/actor-service.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  actor: Actor = new Actor({imagePath: ''});
  id: string;

  constructor(private actorService: ActorService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.actorService.getActor(this.id).then(res => {
            this.actor = res[0];
          });
        }
      );
  }



  onEditActor() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }

  onDeleteActor() {
    this.actorService.deleteActor(this.id);
    this.router.navigate(['/actors']);
  }

}
