import Character from './Character';

export default function playerLogger(player: Character): string {
  return `
  nome: ${player.archetype.name}
  HP: ${player.lifePoints}
  força: ${player.strength}
  defesa: ${player.defense}
  dextresa: ${player.dexterity}
  `;
}