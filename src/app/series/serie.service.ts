import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Http, Headers} from '@angular/http';
import {Serie} from './serie.model';
import {toPromise} from 'rxjs/operator/toPromise';
import {Character} from './character.model';
import {Actor} from '../actor.model';

@Injectable()
export class SerieService {
  serieChanged = new Subject<Serie[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/series/';

  private series: Serie[];
  private actors: Actor[];

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
    console.log(this.serverUrl);
    return this.http.post(this.serverUrl, serie, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response);
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

  deleteSerie(index: string) {
    return this.http.delete(this.serverUrl + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.serieChanged.next(this.series);
      });
  }

  addChar(serie: Serie, char: Character) {
    const actor = new Actor({name: 'test test', description: 'test', imagePath: 'https://s3-storage.textopus.nl/wp-content/uploads/2014/06/21163734/The-Test-Fun-for-Friends-iPhone-iPad.png', birthDate: '2000-0-0'});
    console.log(char)
    console.log(char.actors)
    serie.characters.push(char);
    return this.http.put(this.serverUrl + serie._id, serie, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response);
        this.serieChanged.next(this.series);
      });
  }

  updateChar(index: string, newSerie: Serie) {
    return this.http.put(this.serverUrl + index, newSerie,  {headers: this.headers})
      .toPromise()
      .then(response => {
        this.serieChanged.next(this.series);
      });
  }

  getActors() {

    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.actors = response.json() as Actor[];
        return response.json() as Serie[];
      })
      .catch(error => {
        return error;
      });
  }

}
