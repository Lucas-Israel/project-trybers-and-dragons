import Monster from './Monster';

export default class Dragon extends Monster {
  private _lifepoints = 999;

  public get lifePoints() {
    return this._lifepoints;
  }
}