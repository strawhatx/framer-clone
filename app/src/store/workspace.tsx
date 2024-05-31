// src/store/useAuthStore.js
import { create } from 'zustand';
import { Space } from '../interfaces/space';


interface SpaceState {
  loading: boolean;
  active: Space | null;
  spaces: Space[];
  search: string;
  getUserSpaces: (userId: string) => Promise<void>,
  getSpaceById: (id: number) => Promise<void>,
  createSpace: (name: string) => Promise<void>,
  updateSpace: (space: Space) => Promise<void>,
  archiveSpace: (id: number) => Promise<void>,
}

const useWorkspaceStore = create<SpaceState>((set) => ({
  loading: false,
  active: null,
  spaces: [],
  search: "",
  getUserSpaces: async (userId: string) => { },
  getSpaceById: async (id: number) => { },
  createSpace: async (name: string) => { },
  updateSpace: async (space: Space) => { },
  archiveSpace: async (id: number) => { },

}));

export default useWorkspaceStore;
