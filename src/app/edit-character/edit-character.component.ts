import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SerieService} from '../series/serie.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {
  id: string;
  edit = false;
  charForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private serieService: SerieService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.edit = params['id'] != null;
      //this.initForm();
      console.log(this.edit);

    });
  }

  onSubmit() {
    if (this.edit) {
      console.log(this.charForm.value);
      this.serieService.updateChar(this.id, this.charForm.value);
      this.router.navigate(['advanced/' + this.id]);
    } else {
      this.serieService.addChar(this.charForm.value);
      this.serieService.getSeries()
        .then(series => {
          this.serieService.serieChanged.next(series.slice());
        });
    }
  }



}
