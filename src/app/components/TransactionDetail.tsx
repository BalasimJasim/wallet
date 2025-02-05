import React from 'react';
import { Transaction } from '../../types';

interface TransactionDetailProps {
  transaction: Transaction;
}

export const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-[32px] font-bold text-gray-900">
            ${transaction.amount.toFixed(2)}
          </h2>
          <p className="text-[13px] text-gray-500 mt-1">{transaction.name}</p>
          <p className="text-[13px] text-gray-400">{transaction.description}</p>
        </div>

        <div className="bg-white rounded-xl p-4 space-y-4">
          <div>
            <h3 className="text-[13px] text-gray-500">Status</h3>
            <p className="text-[15px] text-gray-900">
              {transaction.isPending ? 'Pending' : 'Approved'}
            </p>
          </div>

          <div>
            <h3 className="text-[13px] text-gray-500">Total</h3>
            <p className="text-[15px] text-gray-900">
              ${transaction.amount.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 