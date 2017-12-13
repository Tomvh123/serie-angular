import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SerieService} from '../services/serie.service';
import {Serie} from '../models/serie.model';
import {Actor} from '../models/actor.model';
import {Character} from '../models/character.model';
import {forEach} from '@angular/router/src/utils/collection';
import {ActorService} from '../services/actor-service.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {
  id: string;
  idChar: string;
  edit = false;
  serie: Serie;
  serie2: Serie;
  actors: [Actor];
  character: Character;
  characterRes: Character;
  charForm: FormGroup;
  selectedActor: Actor;

  constructor(private route: ActivatedRoute,
              private serieService: SerieService,
              private actorService: ActorService,
              private router: Router) {
  }

  ngOnInit() {

    this.actorService.getActors()
      .then(actors => this.actors = actors);
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.idChar = params['charid'];
      this.edit = params['charid'] != null;
      this.initForm();
      this.serieService.getSerie(this.id)
        .then(series => this.serie = series);

    });
  }

  onSubmit() {
    if (this.edit) {
      console.log(this.charForm.value);
      this.router.navigate(['advanced/' + this.id]);
      this.serieService.updateChar(this.idChar, this.charForm.value);
    } else {
      this.serieService.addChar(this.idChar, this.charForm.value, this.serie)
        .then(res =>
          this.serie.characters.push({'_id': res._id})
        )
        .then(() => this.serieService.updateSerie(this.id, this.serie));
      this.router.navigate(['advanced/' + this.id]);
    }
  }

  onAddActor(actor: Actor) {
    (<FormArray>this.charForm.get('actors')).push(
      new FormGroup({
        '_id': new FormControl(actor._id, Validators.required)
      })
    );


  }


  onDeleteActors(index: number) {
    (<FormArray>this.charForm.get('actors')).removeAt(index);

  }

  onCancel() {
    this.router.navigate(['/advanced/' + this.id]);
  }

  private initForm() {

    const characterActors = new FormArray([], Validators.required);
    if (this.edit) {
      this.serieService.getChar(this.idChar).then((res) => console.log(res))
      this.serieService.getChar(this.idChar)
        .then(char => {
          this.character = char;
          if (char['actors']) {
            for (const actor of char.actors) {

              characterActors.push(
                new FormGroup({
                  '_id': new FormControl(actor, Validators.required)
                })
              );
            }
          }

          this.charForm = new FormGroup({
            '_id': new FormControl(this.character._id, Validators.required),
            'name': new FormControl(this.character.name, Validators.required),
            'imagePath': new FormControl(this.character.imagePath, Validators.required),
            'description': new FormControl(this.character.description, Validators.required),
            'birthDate': new FormControl(this.character.birthDate, Validators.required),
            'actors': characterActors
            // 'actors': new FormControl('5a27b83e3a7827198c35c304', Validators.required)

          });
        });


    }


    this.charForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'imagePath': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'birthDate': new FormControl('', Validators.required),
      'actors': new FormArray([])
      // 'actors': new FormControl('5a27b83e3a7827198c35c304', Validators.required)
    });
  }


}
