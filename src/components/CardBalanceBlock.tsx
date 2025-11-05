const CardBalanceBlock = ({ balance }: { balance: number }) => {
  const limit = 1500;
  const available = (limit - balance).toFixed(2);

  return (
    <div className="bg-gray-50 rounded-xl px-4 py-2 shadow-sm flex flex-col justify-center">
      <p className="font-medium">Card Balance</p>
      <p className="text-2xl font-bold">${balance.toFixed(2)}</p>
      <p className=" text-gray-500">${available} Available</p>
    </div>
  );
};

export default CardBalanceBlock;
