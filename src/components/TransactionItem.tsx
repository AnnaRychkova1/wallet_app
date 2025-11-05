import type { Transaction } from "../types/Transaction";
import { Link } from "react-router-dom";
import { formatTxDate } from "../utils/formatDate";

const TransactionItem = ({ tx }: { tx: Transaction }) => {
  let changePercent: string | null = null;
  let decreasing = false;
  let increasing = false;

  if (tx.previousAmount !== undefined && tx.previousAmount !== null) {
    if (tx.amount < tx.previousAmount) {
      decreasing = true;
      const percent =
        ((tx.previousAmount - tx.amount) / tx.previousAmount) * 100;
      changePercent = `${percent.toFixed(1)}%`;
    } else if (tx.amount > tx.previousAmount) {
      increasing = true;
    }
  }

  const formattedDate = formatTxDate(tx.date);

  return (
    <div className="grid grid-cols-[2fr_9fr_1fr] p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition items-center gap-2 h-20 overflow-hidden">
      <div
        className={`rounded-2 w-12 h-12 flex items-center justify-center ${
          increasing ? "bg-green-100" : "bg-gray-200"
        }`}
      >
        {tx.name === "Apple" && <i className="fa-brands fa-apple text-xl"></i>}
        {tx.name === "Target" && (
          <i className="fa-solid fa-bullseye text-red-700"></i>
        )}
        {tx.name === "IKEA" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 192.756 192.756"
            id="ikea"
          >
            <g fill-rule="evenodd" clip-rule="evenodd">
              <path fill="#fff" d="M0 0h192.756v192.756H0V0z"></path>
              <path
                fill="#2360a5"
                d="M2.834 63.4h187.087v65.956H2.834V63.4zm1.903 33.137c0-16.725 41.17-30.283 91.958-30.283 50.787 0 91.957 13.558 91.957 30.283s-41.17 30.283-91.957 30.283c-50.787 0-91.958-13.558-91.958-30.283 0 0 0 16.725 0 0z"
              ></path>
              <path
                fill="#f6d33c"
                d="M4.737 96.537c0-16.725 41.17-30.283 91.958-30.283 50.787 0 91.957 13.558 91.957 30.283s-41.17 30.283-91.957 30.283c-50.787 0-91.958-13.558-91.958-30.283 0 0 0 16.725 0 0z"
              ></path>
              <path
                fill="#2360a5"
                d="M29.842 84.052h16.346s-.436.686-.436 1.543v21.043c0 1.143.49 2.115.49 2.115H29.788s.49-.973.49-1.945V85.766c0-.8-.436-1.714-.436-1.714zM54.326 84.108h15.543s-.436.732-.436 1.409v7.55l5.508-7.043s.328-.507.328-1.014v-.789h15.815l-6.708 9.353s-.327.394-.327.676.273.676.273.676l8.617 13.691H73.904s.328-.506.328-1.014c0-.506-.328-1.127-.328-1.127l-4.527-7.381v8.002c0 .676.491 1.576.491 1.576H54.326s.436-.619.436-1.295V85.516c0-.675-.436-1.408-.436-1.408zM97.568 84.279h27.803v7.468s-.6-.553-1.361-.553h-11.395v2.046h9.922v6.583s-.654-.553-1.363-.553h-8.668v2.268h11.666c.654 0 1.037-1.051 1.037-1.051v8.186H97.568s.492-.719.492-1.217V86.105c.001-.886-.492-1.826-.492-1.826zM137.672 84.011h22.23s-.436 1.029-.436 1.601.381 1.601.381 1.601l8.881 21.5h-16.672s.381-.629.162-1.143a389.905 389.905 0 0 1-1.361-3.432h-6.865s-1.363 3.031-1.363 3.604c0 .57.438 1.029.438 1.029h-13.732l8.609-22.473s.328-.458.328-1.029-.6-1.258-.6-1.258zm9.426 10.979l-1.635 4.403h3.596l-1.961-4.403z"
              ></path>
            </g>
          </svg>
        )}
      </div>
      <div>
        <div className="flex justify-between">
          <p className="font-medium">{tx.name}</p>
          <p className="font-medium">
            {" "}
            {increasing ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between gap-2 text-sm font-semibold">
          <p className="text-xs text-gray-500 line-clamp-2">
            {tx.pending ? "Pending - " : ""}
            {tx.description}
            {tx.authorizedUser ? ` - ${tx.authorizedUser}` : ""} -{" "}
            {formattedDate}
          </p>
          {decreasing && (
            <p className="text-xs text-gray-500">{changePercent}</p>
          )}
        </div>
      </div>
      <div>
        <Link to={`/transaction/${tx.id}`}>
          <i className="fa-solid fa-angle-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default TransactionItem;
