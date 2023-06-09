import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static count = 0;
  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 60;
    Halfling.count += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
