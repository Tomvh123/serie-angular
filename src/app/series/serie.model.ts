export class Serie {
  private id: string;
  private _name: string;
  private _description: string;
  private _imagepath: string;
  // private creators
  private _characters: [object]


  constructor(values: object = {}) {
    Object.assign(this, values);
  }

  public get characters() {
    return this._characters;
  }

  public set characters(n: [object]) {
    this._characters = n;
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
