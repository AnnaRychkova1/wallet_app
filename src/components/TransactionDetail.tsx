import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Transaction } from "../types/Transaction";
import { formatTxDate } from "../utils/formatDate";

const TransactionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tx, setTx] = useState<Transaction | null>(null);

  useEffect(() => {
    fetch("/src/data/transactions.json")
      .then((res) => res.json())
      .then((data) => {
        const transaction = data.transactions.find(
          (t: Transaction) => t.id === Number(id)
        );
        setTx(transaction);
      });
  }, [id]);

  if (!tx) return <div className="p-4 text-center">Loading...</div>;

  const formattedDate = formatTxDate(tx.date);

  return (
    <div className="p-4 bg-gray-200 text-gray-800 min-h-screen">
      <header className="flex justify-between items-center px-4 text-gray-800">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-sm">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </span>

          <i className="fa-solid fa-location-arrow text-xs"></i>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <i className="fa-solid fa-signal"></i>
          <i className="fa-solid fa-wifi"></i>
          <i className="fa-solid fa-battery-full"></i>
        </div>
      </header>
      <button onClick={() => navigate(-1)} className="text-blue-500 mt-8 mb-4">
        <i className="fa-solid fa-angle-left"></i>
      </button>

      <div className="text-center">
        <p className="text-4xl font-bold">${Math.abs(tx.amount).toFixed(2)}</p>
        <p className="text-sm text-gray-500 mt-1">{tx.name}</p>
        <p className="text-xs text-gray-400">
          {formattedDate},{" "}
          {new Date(tx.date).toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </p>
      </div>

      <div className="bg-white rounded-xl p-4 mt-6 shadow-sm">
        <p className="text-sm text-gray-500 mb-1">Status:</p>
        <p className="font-medium">{tx.pending ? "Pending" : "Approved"}</p>

        <div className="relative flex justify-between items-center mt-4 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gray-300 before:opacity-30">
          <p className="text-gray-700 font-semibold pt-2">Total</p>
          <p className="text-gray-900 font-semibold">
            ${Math.abs(tx.amount).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
