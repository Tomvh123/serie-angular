import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Actor} from '../actor.model';
import {Subject} from 'rxjs/Subject';
import {Headers, Http} from '@angular/http';


@Injectable()
export class ActorService {
  actorChanged = new Subject<Actor[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrlActor;

  private actors: Actor[];

  constructor(private http: Http) {
  }


  getActors() {
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.actors = response.json() as Actor[];
        return response.json() as Actor[];
      })
      .catch(error => {
        return error;
      });
  }

  getActor(index: string) {
    if (index == null)
      return null;

    return this.http.get(this.serverUrl + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {

        return error;
      });
  }

  addActor(actor: Actor) {
    return this.http.post(this.serverUrl, actor, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.actorChanged.next(this.actors.slice());
      });
  }

  updateRecipe(index: string, newActor: Actor) {
    return this.http.put(this.serverUrl + index, newActor, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.actorChanged.next(this.actors.slice());
      });
  }


  deleteActor(index: string) {
    return this.http.delete(this.serverUrl + index, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.actorChanged.next(this.actors.slice());
      });
  }

}
