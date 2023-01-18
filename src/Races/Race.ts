export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;

  constructor(name: string, dex: number) {
    this._name = name;
    this._dexterity = dex;
  }

  public get name() {
    return this._name;
  }

  public get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}