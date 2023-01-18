import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 99;
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