import {Component, Input, OnInit} from '@angular/core';
import {Serie} from '../../serie.model';

@Component({
  selector: 'app-serie-item',
  templateUrl: './serie-item.component.html',
  styleUrls: ['./serie-item.component.css']
})
export class SerieItemComponent implements OnInit {
  @Input() serie: Serie;
  @Input() index: string;

  constructor() {
  }

  ngOnInit() {
    this.index = this.serie._id;
  }

}
