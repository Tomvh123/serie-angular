import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SerieService} from '../series/serie.service';
import {Serie} from '../series/serie.model';
import {Actor} from '../actor.model';
import {Character} from '../series/character.model';

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
  actors: [Actor];
  character: Character;
  charForm: FormGroup;
  selectedActor: Actor;

  constructor(private route: ActivatedRoute,
              private serieService: SerieService,
              private router: Router) {
  }

  ngOnInit() {

    this.serieService.getActors()
      .then(actors => this.actors = actors);
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.idChar = params['charid'];
      this.edit = params['charid'] != null;
      console.log(this.edit);
      this.initForm();
      this.serieService.getSerie(this.id)
        .then(series => this.serie = series);

    });
  }

  onSubmit() {
    if (this.edit) {
      /*this.serie.characters.splice(this.idChar, this.idChar + 1);
      this.serie.characters.push(this.charForm.value);
      this.serieService.updateChar(this.serie, this.charForm.value);
      this.router.navigate(['advanced/' + this.id]);*/
      console.log(this.charForm.value);
      this.router.navigate(['advanced/' + this.id]);
      this.serieService.updateChar(this.idChar, this.charForm.value);
    } else {
      this.serieService.addChar(this.serie, this.charForm.value);
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
          this.character = char[0];
        if (char[0]['actors']) {
          console.log('testsekjkfjd')
          for (const actor of char[0].actors){

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
