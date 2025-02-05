'use client';

import { TransactionDetail } from '../../../components/TransactionDetail';
import { mockData } from '../../../data/mockData';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
}

export default function TransactionDetailPage({ params }: PageProps) {
  const id = params?.id;
  const transaction = mockData.transactions.find(t => t.id === id);

  if (!transaction) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <div className="max-w-[375px] mx-auto px-4 py-3 flex items-center">
          <Link href="/" className="text-blue-600">
            <span className="text-lg">←</span>
          </Link>
        </div>
      </div>
      <div className="max-w-[375px] mx-auto">
        <TransactionDetail transaction={transaction} />
      </div>
    </div>
  );
} 