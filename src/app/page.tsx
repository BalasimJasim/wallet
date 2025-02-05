import { CardBalanceBlock } from './components/CardBalanceBlock';
import { DailyPointsBlock } from './components/DailyPointsBlock';
import { TransactionList } from './components/TransactionList';
import { mockData } from '../data/mockData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[375px] mx-auto px-4 py-3">
        <div className="space-y-[1px]">
          <CardBalanceBlock cardBalance={mockData.cardBalance} />
          <div className="bg-white rounded-xl p-4">
            <p className="text-green-600 text-[13px] font-medium flex items-center">
              <span className="mr-1.5">✓</span>
              You've paid your balance
            </p>
          </div>
          <DailyPointsBlock dailyPoints={mockData.dailyPoints} />
        </div>
        <div className="mt-6">
          <TransactionList transactions={mockData.transactions} />
        </div>
      </div>
    </div>
  );
}
