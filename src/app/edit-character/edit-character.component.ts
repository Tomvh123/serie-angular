import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute,
              private serieService: SerieService,
              private router: Router) { }

  ngOnInit() {
    this.serieService.getActors()
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

      this.serieService.updateChar( 'dfdf', this.charForm.value);
      this.router.navigate(['advanced/' + this.id]);
    } else {
      this.serieService.addChar(this.serie, this.charForm.value);
      /*this.serieService.getSeries()
        .then(series => {
          this.serieService.serieChanged.next(series.slice());
        });*/
    }
  }

  onAddActor() {
    (<FormArray>this.charForm.get('actors')).push(
      new FormGroup({
        '_id': new FormControl('5a27cfcf4223f601f0957851', Validators.required)
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

    const characterActors = new FormArray([]);

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
