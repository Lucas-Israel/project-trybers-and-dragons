import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defence: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._archetype = new Mage(name);
    this._defence = getRandomInt(1, 10);
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._energy = {
      amount: getRandomInt(1, 10),
      type_: this._archetype.energyType, 
    };
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._name = name;
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    return { amount: this._energy.amount, type_: this._energy.type_ };
  }

  get defense() {
    return this._defence;
  }

  get name() {
    return this._name;
  }

  receiveDamage(attackPoints: number): number {
    const total = attackPoints - this._defence;

    if (total > 0) this._lifePoints -= total;
    if (total <= 0) this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) { 
      this._maxLifePoints = this._race.maxLifePoints; 
    }
    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defence += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  special(enemy: Fighter): void {
    const azura = enemy.defense || 0 + this.energy.amount * this._strength;
    enemy.receiveDamage(azura);
  }
}
