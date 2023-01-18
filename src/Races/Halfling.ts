import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    let count = 0;
    count += 1;
    return count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}