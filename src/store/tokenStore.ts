import { create } from "zustand";

interface TokenStore {
  token: string | null;
  setToken: (token: string | null) => void;
  clearToken: () => void;
}

const TokenStore = create<TokenStore>()(
  (set) => ({
    token: null,
    setToken: (token: string | null) => set({ token }),
    clearToken: () => set({ token: null }),
  }),
);

export default TokenStore;
