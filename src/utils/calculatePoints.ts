export const calculateDailyPoints = (): string => {
  const now = new Date();
  const seasonStart = new Date(
    now.getFullYear(),
    Math.floor(now.getMonth() / 3) * 3,
    1
  );
  const dayOfSeason =
    Math.floor((+now - +seasonStart) / (1000 * 60 * 60 * 24)) + 1;

  let points = 2;
  if (dayOfSeason === 2) points = 3;
  else if (dayOfSeason > 2) {
    let prev = 3;
    for (let i = 3; i <= dayOfSeason; i++) {
      prev = prev + prev * 0.6;
    }
    points = Math.round(prev);
  }

  return points > 1000 ? `${Math.round(points / 1000)}K` : `${points}`;
};
