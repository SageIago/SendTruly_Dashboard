import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserDashboardData {
  usertoken: number;
  fname: string;
  lname: string;
  mail: string;
  country: string;
  role: string;
  is_verified: boolean;
  kyc_status: boolean;
  plan_info: {
    plan_type: string;
    enterprise_plan: boolean;
  };
  api_key: {
    api_key: string;
  };
  getAccountBalance: {
    account_balance: string;
    message: string;
    status_code: number;
  };
  reg_date: string;
  transactions: [];
}

interface UserStore {
  user: UserDashboardData;
  setUser: (user: UserDashboardData) => void;
  updateUser: (updates: Partial<UserDashboardData>) => void;
  clearUser: () => void;
}

const UserDashboardStore = create<UserStore>()(
  persist(
    (set, get) => ({
      // Initial state
      user: {
        usertoken: 0,
        fname: "",
        lname: "",
        mail: "",
        country: "",
        role: "",
        is_verified: false,
        kyc_status: false,
        plan_info: {
          plan_type: "",
          enterprise_plan: false,
        },
        api_key: {
          api_key: "",
        },
        getAccountBalance: {
          account_balance: "",
          message: "",
          status_code: 0,
        },
        reg_date: "",
        transactions: [],
      },

      // Method to completely replace the user object
      setUser: () => set({ user: get().user }),

      // Method to partially update user data
      updateUser: (updates: Partial<UserDashboardData>) =>
        set((state: { user: UserDashboardData }) => ({
          user: { ...state.user, ...updates },
        })),

      // Method to clear user data
      clearUser: () =>
        set({
          user: {
            usertoken: 0,
            fname: "",
            lname: "",
            mail: "",
            country: "",
            role: "",
            is_verified: false,
            kyc_status: false,
            plan_info: {
              plan_type: "",
              enterprise_plan: false,
            },
            api_key: {
              api_key: "",
            },
            getAccountBalance: {
              account_balance: "",
              message: "",
              status_code: 0,
            },
            reg_date: "",
            transactions: [],
          },
        }),
    }),
    {
      name: "user-dashboard-storage", // Unique name for storage
      storage:
        typeof window !== "undefined"
          ? createJSONStorage(() => sessionStorage)
          : undefined, // Use sessionStorage only on client
    }
  )
);

export default UserDashboardStore;