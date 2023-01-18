import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static count = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}