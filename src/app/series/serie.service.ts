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
  actorChanged = new Subject<Actor[]>();
  charChanged = new Subject<Serie>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + '/series/';

  private serie: Serie;
  private series: Serie[];
  private actors: Actor[];
  private characters: Character[];

  constructor(private http: Http) {

  }



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

  addChar(id: string, char: Character, serie: Serie) {
    console.log('addChar')

    return this.http.post(environment.serverUrlChar, char, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.charChanged.next(this.serie);
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
        this.serie = response.json() as Serie;
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
        this.serieChanged.next(this.series);
      });
  }


  updateSerie(index: string, newSerie: Serie) {
    return this.http.put(this.serverUrl + index, newSerie, {headers: this.headers})
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
        this.serieChanged.next(this.series);
      });

  }


  //actors

  getActors() {

    return this.http.get('http://localhost:3000/api/v1/actors', {headers: this.headers})
      .toPromise()
      .then(response => {
        this.actors = response.json() as Actor[];
        return response.json() as Actor[];
      })
      .catch(error => {
        return error;
      });
  }

}
