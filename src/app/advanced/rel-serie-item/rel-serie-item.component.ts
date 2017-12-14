import {Component, OnInit, Input} from '@angular/core';
import {Serie} from "../../models/serie.model";

@Component({
  selector: 'app-rel-serie-item',
  templateUrl: './rel-serie-item.component.html',
  styleUrls: ['./rel-serie-item.component.css']
})
export class RelSerieItemComponent implements OnInit {

    @Input() serieRel: Serie;

  constructor() { }

  ngOnInit() {

  }

}
