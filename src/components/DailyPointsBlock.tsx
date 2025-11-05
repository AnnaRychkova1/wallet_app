import { calculateDailyPoints } from "../utils/calculatePoints";

const DailyPointsBlock = () => {
  const points = calculateDailyPoints();

  return (
    <div className="bg-gray-50 rounded-xl px-4 py-2 shadow-sm flex flex-col justify-center">
      <p className="font-medium">Daily Points</p>
      <p className=" text-gray-500">{points}</p>
    </div>
  );
};

export default DailyPointsBlock;
