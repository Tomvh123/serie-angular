import {Actor} from './actor.model';
import {Person} from './Person';

export class Character implements Person {
  private id: string;
  private _name: string;
  private _description: string;
  private _imagepath: string;
  private _actors: [Actor];
  private _birthDate: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get _id() {
    return this.id;
  }

  public set _id(n: string) {
    this.id = n;
  }

  public get actors() {
    return this._actors;
  }

  public set actors(n: [Actor]) {
    this._actors = n;
  }

  public get name() {
    return this._name;
  }

  public set name(n: string) {
    this._name = n;
  }

  public get description() {
    return this._description;
  }

  public set description(n: string) {
    this._description = n;
  }

  public get imagePath() {
    return this._imagepath;
  }

  public set imagePath(n: string) {
    this._imagepath = n;
  }

  public get birthDate() {
    return this._birthDate;
  }

  public set birthDate(n: Date) {
    this._birthDate = n;
  }
}
