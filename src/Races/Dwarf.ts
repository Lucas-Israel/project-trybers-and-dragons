import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static count = 0;
  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 80;
    Dwarf.count += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
