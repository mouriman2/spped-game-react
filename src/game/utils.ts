import { Card, Suit } from './types';

export function createDeck(): Card[] {
  const suits: Suit[] = ['♠', '♥', '♦', '♣'];
  const deck: Card[] = [];
  for (const suit of suits) {
    for (let rank = 1; rank <= 13; rank++) {
      deck.push({ suit, rank });
    }
  }
  return shuffle(deck);
}

export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function cardLabel(card: Card): string {
  const rankLabels = {
    1: 'A',
    11: 'J',
    12: 'Q',
    13: 'K',
  } as Record<number, string>;
  const rank = rankLabels[card.rank] || String(card.rank);
  return `${rank}${card.suit}`;
}
