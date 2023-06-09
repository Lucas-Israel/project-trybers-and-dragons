import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import playerLogger from './playerLogger';

const player1 = new Character('Aldo');
const player2 = new Character('Baldo');
const player3 = new Character('Caldo');

for (let index = 0; index < 19; index += 1) player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (array: Battle[]) => array.forEach((e) => e.fight());

console.log(`Jogador 1: ${playerLogger(player2)}`);

console.log(`Jogador 2: ${playerLogger(player3)}`);

runBattles([pvp]);

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
