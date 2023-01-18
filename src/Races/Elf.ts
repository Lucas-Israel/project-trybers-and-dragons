import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static count = 0;
  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 99;
    Elf.count += 1;
  }

  static createdRacesInstances(): number {
    return Elf.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
