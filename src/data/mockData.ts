import { CardBalance, Transaction, DailyPoints } from '../types';

export const mockData: {
  cardBalance: CardBalance;
  transactions: Transaction[];
  dailyPoints: DailyPoints;
} = {
  cardBalance: {
    balance: 17.30,
    limit: 1000,
    availableLimit: 982.70
  },
  transactions: [
    {
      id: "1",
      type: "Payment",
      amount: 14.06,
      name: "Apple",
      description: "App Store Purchase",
      date: "2024-02-05",
      icon: "apple",
      isPending: true
    },
    {
      id: "2",
      type: "Payment",
      amount: 174.00,
      name: "Banki Bank",
      description: "Monthly Payment",
      date: "2024-02-05",
      icon: "bank",
      authorizedUser: "Basil Masil"
    },
    {
      id: "3",
      type: "Payment",
      amount: 3.24,
      name: "Apple",
      description: "Music Subscription",
      date: "2024-02-04",
      icon: "apple"
    },
    {
      id: "4",
      type: "Payment",
      amount: 99.71,
      name: "Banki Bank",
      description: "Auto Payment",
      date: "2024-02-04",
      icon: "bank"
    },
    {
      id: "5",
      type: "Payment",
      amount: 73.58,
      name: "Target",
      description: "Store Purchase",
      date: "2024-02-03",
      icon: "target"
    }
  ],
  dailyPoints: {
    points: 287,
    date: "2024-02-05",
    season: "winter",
    dayOfSeason: 66
  }
}; 