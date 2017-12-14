import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Http, Headers} from '@angular/http';
import {Serie} from '../models/serie.model';
import {toPromise} from 'rxjs/operator/toPromise';
import {Character} from '../models/character.model';
import {Actor} from '../models/actor.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SerieService {
  serieChanged = new Subject<void>();
  // actorChanged = new Subject<void>();
  charChanged = new Subject<void>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/series/';

  private serie: Serie;
  private series: Serie[];
  private actors: Actor[];
  private characters: Character[];

  constructor(private http: Http) {

  }
  //series
  addChar(id: string, char: Character, serie: Serie) {
    console.log('addChar')

    return this.http.post(environment.serverUrlChar, char, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.charChanged.next();
        return response.json() as Character;
      })
      .catch(error => {
        return error;
      });
  }

  getSeries() {
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
        // this.serie = response.json() as Serie;
        return response.json();
      })
      .catch(error => {
        console.log(error)
        return error;
      });
  }

  addSerie(serie: Serie) {
    console.log(serie);
    return this.http.post(this.serverUrl, serie, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.serieChanged.next();
      });
  }


  updateSerie(index: string, newSerie: Serie) {
    return this.http.put(this.serverUrl + index, newSerie, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.serieChanged.next();
      });
  }

  deleteSerie(index: string) {
    return this.http.delete(this.serverUrl + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.serieChanged.next();
      });
  }


  // character

  getChars() {
    return this.http.get(environment.serverUrlChar, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.characters = response.json() as Character[];
        return response.json() as Character[];
      })
      .catch(error => {
        return error;
      });

  }

  getChar(index: string) {
    if (index == null)
      return null;
    return this.http.get(environment.serverUrlChar + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error)
        return error;
      });
  }


  updateChar(id: string, char: Character) {
    console.log('update');
    console.log()
    return this.http.put(environment.serverUrlChar + id, char, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response);
        this.serieChanged.next();
      });

  }


  //rel
  getSeriesRel(genre: String) {
    return this.http.get(environment.serverUrlRel + genre, {headers: this.headers})
      .toPromise()
      .then(response => {
        // this.series = response.json() as Serie[];
        return response.json() as Serie[];
      })
      .catch(error => {
        return error;
      });


  }

}
