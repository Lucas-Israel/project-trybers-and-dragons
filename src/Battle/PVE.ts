import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: Character | Fighter;
  private _monsterArr: (Fighter | SimpleFighter)[];

  constructor(
    player: Character | Fighter,
    monsterArr: (Fighter | SimpleFighter)[],
  ) {
    super(player);
    this._player1 = player;
    this._monsterArr = monsterArr;
  }

  public get player1() {
    return this._player1;
  }

  public get monsterArr() {
    return this._monsterArr;
  }

  makeArray(): (Character | Fighter | SimpleFighter)[] {
    this._monsterArr.unshift(this._player1);
    
    return this.monsterArr;
  }

  static hpCheck(array: (Character | Fighter | SimpleFighter)[]): boolean {
    const newArrToCheck = array.slice(1);
    if (newArrToCheck.every((e) => e.lifePoints < 0)) return false;
    
    if (array[0].lifePoints < 0) return false;
    return true;
  }

  static targetIndexCheck(index: number) {
    let targetIndex = 1;
    if (targetIndex === index) targetIndex += 1;
    if (index > 0) targetIndex = 0;
    return targetIndex;
  }

  static attackerCheck(
    array: (Character | SimpleFighter | Fighter)[],
    index: number,
    target: (Character | SimpleFighter | Fighter),
  ) {
    if (array[index].lifePoints < 0) return;

    return array[index].attack(target);
  }

  static targetCheck(
    array: (Character | Fighter | SimpleFighter)[],
    targetIndex: number,
  ) {
    let target = array[targetIndex];
    for (let index = targetIndex; target.lifePoints < 0; index += 1) {
      target = array[index];
    }
    return target;
  }

  fight(): number {
    const array = this.makeArray();

    for (
      let index = 0;
      PVE.hpCheck(array);
      index === array.length - 1 ? index = 0 : index += 1
    ) {
      const targetIndex = PVE.targetIndexCheck(index);
      const target = PVE.targetCheck(array, targetIndex);
      PVE.attackerCheck(array, index, target);
    }

    return super.fight();
  }
}
