import { useState, useEffect } from "react";

export function useDynamicCounter(
  baseValue: number,
  startDate: Date = new Date()
) {
  const [count, setCount] = useState(baseValue);

  useEffect(() => {
    const calculateDaysSinceStart = () => {
      const today = new Date();
      const timeDiff = today.getTime() - startDate.getTime();
      const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
      return Math.max(0, daysDiff); // Ensure we don't go negative
    };

    const updateCount = () => {
      const daysSinceStart = calculateDaysSinceStart();
      setCount(baseValue + daysSinceStart);
    };

    // Update immediately
    updateCount();

    // Update every day at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    const timer = setTimeout(() => {
      updateCount();
      // Set up daily updates
      const dailyTimer = setInterval(updateCount, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyTimer);
    }, timeUntilMidnight);

    return () => clearTimeout(timer);
  }, [baseValue, startDate]);

  return count;
}
