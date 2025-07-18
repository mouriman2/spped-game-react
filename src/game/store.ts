import { create } from 'zustand';

import { Card } from './types';
import { createDeck } from './utils';

export interface GameState {
  playerHand: Card[];
  aiHand: Card[];
  center: [Card, Card];
  playerDeck: Card[];
  aiDeck: Card[];
  status: 'playing' | 'playerWon' | 'aiWon';
  playCard: (index: number) => void;
  aiPlay: () => void;
  reset: () => void;
}

function isAdjacent(card: Card, target: Card) {
  const diff = Math.abs(card.rank - target.rank);
  if (diff === 1) return true;
  if (card.rank === 1 && target.rank === 13) return true;
  if (card.rank === 13 && target.rank === 1) return true;
  return false;
}

export const useGameStore = create<GameState>((set, get) => {
  function initState(): Omit<GameState, 'playCard' | 'aiPlay' | 'reset'> {
    const deck = createDeck();
    const playerDeck = deck.slice(0, 26);
    const aiDeck = deck.slice(26);
    const playerHand = playerDeck.splice(0, 5);
    const aiHand = aiDeck.splice(0, 5);
    const center: [Card, Card] = [
      playerDeck.splice(0, 1)[0],
      aiDeck.splice(0, 1)[0],
    ];
    return {
      playerHand,
      aiHand,
      center,
      playerDeck,
      aiDeck,
      status: 'playing',
    };
  }

  return {
    ...initState(),
    playCard: (index: number) => {
      set((state) => {
        if (state.status !== 'playing') return state;
        const card = state.playerHand[index];
        if (!card) return state;
        const [left, right] = state.center;
        if (isAdjacent(card, left)) {
          state.center[0] = card;
        } else if (isAdjacent(card, right)) {
          state.center[1] = card;
        } else {
          return state;
        }
        state.playerHand.splice(index, 1);
        if (state.playerDeck.length) {
          state.playerHand.push(state.playerDeck.shift()!);
        }
        if (!state.playerHand.length && !state.playerDeck.length) {
          state.status = 'playerWon';
        }
        return state;
      });
      get().aiPlay();
    },
    aiPlay: () => {
      set((state) => {
        if (state.status !== 'playing') return state;
        const [left, right] = state.center;
        const index = state.aiHand.findIndex(
          (c) => isAdjacent(c, left) || isAdjacent(c, right)
        );
        if (index >= 0) {
          const card = state.aiHand[index];
          if (isAdjacent(card, left)) {
            state.center[0] = card;
          } else {
            state.center[1] = card;
          }
          state.aiHand.splice(index, 1);
          if (state.aiDeck.length) {
            state.aiHand.push(state.aiDeck.shift()!);
          }
          if (!state.aiHand.length && !state.aiDeck.length) {
            state.status = 'aiWon';
          }
        }
        return state;
      });
    },
    reset: () => set(() => initState()),
  };
});
