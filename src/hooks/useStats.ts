import { GetUserChartData } from "@/api/user/getUserData";
import StatsStore from "@/store/statsStore";
import { useEffect, useState } from "react";

export const useStats = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setStats } = StatsStore();

  const timeoutId = 3000
useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
        const FetchStatsFromDB = await GetUserChartData();

        if (FetchStatsFromDB.status === 200 && FetchStatsFromDB.data) {
            setStats(FetchStatsFromDB.data);
        } else if (FetchStatsFromDB.status === 401) {
            setError("UnAuthorized Access, User Not Verified");
        } else if (FetchStatsFromDB.status === 500) {
            setError("UnAuthorized Access, User Not Verified");
        }
    };

    setTimeout(() => {
        fetchData();
        setIsLoading(false);
    }, timeoutId); // Set timeout for 3 seconds

    return () => clearTimeout(timeoutId);
}, [setStats, timeoutId]);

  return { isLoading, error };
};
