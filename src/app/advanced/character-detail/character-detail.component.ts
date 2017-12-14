import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../models/character.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character;
  @Input() serieId: string;
  @Input() i : number;

  constructor(private router: Router) {
  }

  onActorClick() {
    this.router.navigateByUrl('/actors/' + this.character.actors[0]._id )
  }

  ngOnInit() {


  }

}
