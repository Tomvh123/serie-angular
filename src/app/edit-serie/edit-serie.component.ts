import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SerieService} from '../series/serie.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Serie} from '../series/serie.model';

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.css']
})
export class EditSerieComponent implements OnInit {
  id: string;
  edit = false;
  serieForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private serieService: SerieService,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.edit = params['id'] != null;
      this.initForm();

    });
  }

  onSubmit() {
    if (this.edit) {
      console.log(this.serieForm.value);
      this.serieService.updateSerie(this.id, this.serieForm.value);
      this.router.navigate(['advanced/' + this.id]);
    } else {
      this.serieService.addSerie(this.serieForm.value);
      this.serieService.getSeries()
        .then(series => {
          this.serieService.serieChanged.next(series.slice());
        });
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let editSerie = new Serie({name: '', imagePath: '', description: ''});

    if (this.edit) {
      this.serieService.getSerie(this.id)
        .then(serie => {

          editSerie = serie;
          this.serieForm = new FormGroup({
            'name': new FormControl(editSerie.name, Validators.required),
            'imagePath': new FormControl(editSerie.imagePath, Validators.required),
            'description': new FormControl(editSerie.description, Validators.required),
            'start': new FormControl(editSerie.start, Validators.required),
            'seasons': new FormControl(editSerie.seasons, Validators.required),
            'episodes': new FormControl(editSerie.episodes, Validators.required),
            'language': new FormControl(editSerie.language, Validators.required),

          });
        })
        .catch(error => console.log(error));
    }
    this.serieForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'imagePath': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'start': new FormControl('', Validators.required),
      'seasons': new FormControl('', Validators.required),
      'episodes': new FormControl('', Validators.required),
      'language': new FormControl('', Validators.required),

    });


  }

}