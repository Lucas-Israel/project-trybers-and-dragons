import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Character | Fighter;
  private _player2: Character | Fighter;

  constructor(player1: Character | Fighter, player2: Character | Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  get player1() {
    return this._player1;
  }

  get player2() {
    return this._player2;
  }

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  static shuffleArray(array: Character[]) {
    const shuffle = array.map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return shuffle;
  }

  sorting(): Character[] {
    const p1 = this.player1 as Character;
    const p2 = this.player2 as Character;

    const sort = [p1, p2].sort((P, P2) => P2.dexterity - P.dexterity);

    if (sort[0].dexterity === sort[1].dexterity) return PVP.shuffleArray(sort);

    return sort;
  }

  static winner(arr: Character[]): Character {
    const sorted = arr.sort((P) => -P.lifePoints);

    return sorted[0];
  }

  fight(): number {
    const sort = this.sorting();
    
    for (
      let index = 0;
      sort[index === 0 ? 0 : 1].lifePoints > 0;
      index === 0 ? index = 1 : index = 0
    ) {
      sort[index].attack(sort[index === 0 ? 1 : 0]);
    }

    console.log(`Vencedor: ${PVP.winner(sort).race.name}`);
    
    return super.fight();
  }
}
