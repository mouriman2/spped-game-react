import React, { useEffect } from 'react';

import { useGameStore } from './store';
import { Card } from './types';
import { cardLabel } from './utils';

const CardButton: React.FC<{ card: Card; onClick?: () => void; testId?: string }> = ({ card, onClick, testId }) => (
  <button
    onClick={onClick}
    data-testid={testId}
    className="border rounded p-2 bg-white shadow text-sm font-mono"
  >
    {cardLabel(card)}
  </button>
);

export const SpeedGame: React.FC = () => {
  const { playerHand, aiHand, center, status, playCard, reset } = useGameStore();

  useEffect(() => {
    if (status === 'playing') {
      const id = setInterval(() => useGameStore.getState().aiPlay(), 1000);
      return () => clearInterval(id);
    }
  }, [status]);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Speed Game</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          {aiHand.map((c, i) => (
            <div key={i} className="border rounded p-2 bg-gray-200 w-8 h-12" />
          ))}
        </div>
        <div className="flex gap-4">
          {center.map((c, i) => (
            <CardButton key={i} card={c} />
          ))}
        </div>
        <div className="flex gap-2">
          {playerHand.map((c, i) => (
            <CardButton
              key={i}
              card={c}
              testId="player-card"
              onClick={() => playCard(i)}
            />
          ))}
        </div>
      </div>
      <div className="text-center space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded"
          onClick={reset}
        >
          Reset
        </button>
        {status !== 'playing' && (
          <span data-testid="result" className="ml-2 font-semibold">
            {status === 'playerWon' ? 'You win!' : 'AI wins!'}
          </span>
        )}
      </div>
    </div>
  );
};
