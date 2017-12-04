import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SerieService} from '../series/serie.service';
import {FormGroup} from '@angular/forms';

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
      // this.initForm();
    })
  }

}
