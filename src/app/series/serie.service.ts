import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Http, Headers} from '@angular/http';
import {Serie} from './serie.model';

@Injectable()
export class SerieService {
  serieChanged = new Subject<Serie[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/series/';

  private series: Serie[];

  constructor(private http: Http) {

  }

  getSeries() {
    console.log('getSeries');
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.series = response.json() as Serie[];
        return response.json() as Serie[];
      })
      .catch(error => {
        return error;
      });


}

  getSerie(index: string) {
    if (index == null)
      return null;
    return this.http.get(this.serverUrl + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error)
        return error;
      });
  }

  addSerie(serie: Serie) {
    return this.http.post(this.serverUrl, serie, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.serieChanged.next(this.series.slice());
      });
  }

  updateSerie(index: string, newSerie: Serie) {
    return this.http.put(this.serverUrl + index, newSerie,  {headers: this.headers})
      .toPromise()
      .then(response => {
        this.serieChanged.next(this.series);
      });
  }
}
