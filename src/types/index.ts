export type TransactionType = 'Payment' | 'Credit';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  name: string;
  description: string;
  date: string;
  isPending?: boolean;
  authorizedUser?: string;
  icon: string;
}

export interface CardBalance {
  balance: number;
  limit: number;
  availableLimit: number;
}

export interface DailyPoints {
  points: number;
  date: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  dayOfSeason: number;
} 