import { create } from "zustand";

interface StatsData {
  amountSpent: string;
  totalContactCount: number;
  totalSmsCount: number;
  chartData: { current_date: []; total_messages: [] };
}

interface StatsStore {
  stats: StatsData | null;
  setStats: (stats: StatsData | null) => void;
  clearStats: () => void;
}

const StatsStore = create<StatsStore>()((set) => ({
  // Initial state
  stats: {
    amountSpent: "",
    totalContactCount: 0,
    totalSmsCount: 0,
    chartData: { current_date: [], total_messages: [] },
  },

  setStats: (stats) => set({ stats }),

  // Method to clear user data
  clearStats: () =>
    set({
      stats: {
        amountSpent: "",
        totalContactCount: 0,
        totalSmsCount: 0,
        chartData: { current_date: [], total_messages: [] },
      },
    }),
}));

export default StatsStore;
