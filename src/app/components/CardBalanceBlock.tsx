import React from 'react';
import { CardBalance } from '../../types';

interface CardBalanceBlockProps {
  cardBalance: CardBalance;
}

export const CardBalanceBlock: React.FC<CardBalanceBlockProps> = ({ cardBalance }) => {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[28px] font-bold text-gray-900">${cardBalance.balance.toFixed(2)}</h2>
          <p className="text-[13px] text-gray-500">Card Balance</p>
        </div>
        <div className="text-right">
          <p className="text-[13px] text-gray-500">Maximum limit: ${cardBalance.limit}</p>
          <p className="text-[13px] text-gray-500">Available: ${cardBalance.availableLimit.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}; 