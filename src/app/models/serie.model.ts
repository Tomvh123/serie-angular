export class Serie {
  private id: string;
  private _name: string;
  private _description: string;
  private _imagepath: string;
  private _creators: [Object];
  private _characters: [Object];
  private _start: Date;
  private _seasons: Number;
  private _episodes: Number;
  private _language: string;
  private _genre: string;


  public get start() {

    return this._start;
  }

  public set start(n: Date) {

    this._start = n;
  }

  public get seasons() {
    return this._seasons;
  }

  public set seasons(n: Number) {
    this._seasons = n;
  }

  public get episodes() {
    return this._episodes;
  }

  public set episodes(n: Number) {
    this._episodes = n;
  }

  public get language() {
    return this._language;
  }

  public set language(n: string) {
    this._language = n;
  }

  public get genre() {
    return this._genre;
  }

  public set gengre(n: string) {
    this._genre = n;
  }


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get characters() {
    return this._characters;
  }

  public set characters(n: [Object]) {
    this._characters = n;
  }

  public get creators() {
    return this._creators;
  }

  public set creators(n: [Object]) {
    this._creators = n;
  }

  public get _id() {
    return this.id;
  }

  public set _id(n: string) {
    this.id = n;
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


}
