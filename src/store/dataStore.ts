import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  user: UserData;
  setUser: (user: UserData) => void;
  updateUser: (updates: Partial<UserData>) => void;
  clearUser: () => void;
}

const UserDataStore = create<UserStore>()(
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
        api_key: "",
        getAccountBalance: "",
        reg_date: "",
      },

      // Method to completely replace the user object
      setUser: () => set({ user: get().user }),

      // Method to partially update user data
      updateUser: (updates: Partial<UserData>) =>
        set((state: { user: UserData }) => ({
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
            api_key: "",
            getAccountBalance: "",
            reg_date: "",
          },
        }),
    }),
    {
      name: "user-storage", // Unique name for storage
      storage:
        typeof window !== "undefined"
          ? createJSONStorage(() => localStorage)
          : undefined, // Use localStorage only on client
    }
  )
);

export default UserDataStore;
