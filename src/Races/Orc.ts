import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static count = 0;
  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 74;
    Orc.count += 1;
  }

  static createdRacesInstances(): number {
    return Orc.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
