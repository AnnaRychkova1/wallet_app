import { useEffect, useState } from "react";
import CardBalanceBlock from "@/components/CardBalanceBlock";
import NoPaymentDueBlock from "@/components/NoPaymentDueBlock";
import DailyPointsBlock from "@/components/DailyPointsBlock";
import TransactionItem from "@/components/TransactionItem";
import type { Transaction } from "@/types/Transaction";

const TransactionsList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/transactions.json`)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data.transactions);
        const total = data.transactions
          .filter((t: Transaction) => t.type === "Credit")
          .reduce((sum: number, t: Transaction) => sum + Math.abs(t.amount), 0);
        setBalance(total);
      });
  }, []);

  return (
    <div className="p-4 bg-gray-200 text-gray-800 min-h-screen">
      <div className="grid grid-cols-2 gap-2 py-2">
        <div className="grid grid-rows-2 gap-2">
          <CardBalanceBlock balance={balance} />
          <DailyPointsBlock />
        </div>
        <NoPaymentDueBlock />
      </div>

      <div className="pt-2">
        <p className="text-xl font-bold text-gray-800 my-2">
          Latest Transactions
        </p>

        <div className="space-y-2">
          {transactions.slice(0, 10).map((tx) => (
            <TransactionItem key={tx.id} tx={tx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
