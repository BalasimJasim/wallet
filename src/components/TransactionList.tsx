import React from 'react';
import { Transaction } from '../types';
import Link from 'next/link';

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-[17px] font-semibold text-gray-900 mb-3">Latest Transactions</h3>
      <div className="space-y-[2px]">
        {transactions.slice(0, 10).map((transaction) => (
          <Link href={`/transaction/${transaction.id}`} key={transaction.id} className="block">
            <div className="bg-white p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-[13px]">
                  {transaction.icon.charAt(0).toUpperCase()}
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    {transaction.isPending && (
                      <span className="text-[13px] text-gray-500 mr-1">Pending - </span>
                    )}
                    <h4 className="text-[15px] text-gray-900">{transaction.name}</h4>
                  </div>
                  <p className="text-[13px] text-gray-500">
                    {transaction.authorizedUser && `${transaction.authorizedUser} - `}
                    {formatDate(transaction.date)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[15px] text-gray-900">
                  {transaction.type === 'Payment' ? '-' : '+'}${transaction.amount.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}; 