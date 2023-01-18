export default abstract class Race {
  private readonly name: string;
  private readonly dexterity: number;

  constructor(nam: string, dex: number) {
    this.name = nam;
    this.dexterity = dex;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}