import { create } from 'zustand';

interface ConfiguratorState {
  // État du configurateur
  color: string;
  logo: string | null;
  size: string;
  
  // Actions
  setColor: (color: string) => void;
  setLogo: (logo: string | null) => void;
  setSize: (size: string) => void;
  reset: () => void;
}

const initialState = {
  color: '#FFFFFF',
  logo: null,
  size: 'M',
};

export const useConfigurator = create<ConfiguratorState>((set) => ({
  ...initialState,
  
  setColor: (color) => set({ color }),
  setLogo: (logo) => set({ logo }),
  setSize: (size) => set({ size }),
  reset: () => set(initialState),
}));
