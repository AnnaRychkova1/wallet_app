const NoPaymentDueBlock = () => (
  <div className="bg-gray-50 rounded-xl px-4 py-2 shadow-sm flex flex-col justify-between relative">
    <div>
      <p className="font-medium">No Payment Due</p>
      <p className=" text-gray-500">You&#8217;ve paid your balance.</p>
    </div>
    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center absolute right-4 top-3/4 -translate-y-1/2">
      <i className="fa-solid fa-check text-2xl font-medium"></i>
    </div>
  </div>
);

export default NoPaymentDueBlock;
