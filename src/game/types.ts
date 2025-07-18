export type Suit = '♠' | '♥' | '♦' | '♣';
export interface Card {
  suit: Suit;
  rank: number; // 1-13
}
