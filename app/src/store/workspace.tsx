// src/store/useAuthStore.js
import { create } from 'zustand';
import { Space } from '../interfaces/space';
import { useGetManyHook, useGetOneHook } from '../hooks/use-get';
import { usePostHook } from '../hooks/use-post';
import { usePutHook } from '../hooks/use-put';
import { useDeleteHook } from '../hooks/use-delete';

interface SpaceState {
  loading: boolean;
  active: Space | null;
  spaces: Space[];
  search: string;
  filter: string;

  getUserSpaces: (userId: string) => Promise<void>,
  getSpaceById: (id: number) => Promise<void>,
  getUserDefaultSpace: (userId: string) => Promise<void>,
  createSpace: (model: Space) => Promise<void>,
  updateSpace: (model: Space) => Promise<void>,
  updateSearch: (text: string) => void,
  archiveSpace: (id: number) => Promise<void>,
}

const useWorkspaceStore = create<SpaceState>((set) => ({
  loading: false,
  active: null,
  spaces: [],
  search: "",
  filter: "ALL",

  getUserSpaces: async (userId: string) => { 
    const get = useGetManyHook<Space>(`/spaces/user/${userId}`);
    
    set({ loading: true });
    
    try {
      await get.callback();
      set({spaces: get.data})
    } 
    catch (error) {
      set({ loading: false });
      throw error;
    }
    finally {
      set({ loading: false });
    }
  },

  getUserDefaultSpace: async (userId: string) => { 
    const get = useGetOneHook<Space>(`/spaces/user-default/${userId}`);
    
    set({ loading: true });
    
    try {
      await get.callback();
      set({active: get.data})
    } 
    catch (error) {
      set({ loading: false });
      throw error;
    }
    finally {
      set({ loading: false });
    }
  },

  getSpaceById: async (id: number) => { 
    const get =  useGetOneHook<Space>(`/spaces/${id}`);
    
    set({ loading: true });
    
    try {
      await get.callback();
      set({active: get.data})
    } 
    catch (error) {
      set({ loading: false });
      throw error;
    }
    finally {
      set({ loading: false });
    }
  },

  createSpace: async (model: Space) => { 
    const post =  usePostHook<Space>("/spaces/", model);
    
    set({ loading: true });
    
    try {
      await post.callback();
      set({active: post.data})
    } 
    catch (error) {
      set({ loading: false });
      throw error;
    }
    finally {
      set({ loading: false });
    }
  },

  updateSpace: async (model: Space) => { 
    const put =  usePutHook<Space>("/spaces/", model);
    
    set({ loading: true });
    
    try {
      await put.callback();
      set({active: put.data})
    } 
    catch (error) {
      set({ loading: false });
      throw error;
    }
    finally {
      set({ loading: false });
    }
  },

  updateSearch: (text: string) => { 
    set({ search: text});
  },

  archiveSpace: async (id: number) => { 
    const del = useDeleteHook(`/spaces/${id}`);
    
    set({ loading: true });
    
    try {
      await del.callback();
    } 
    catch (error) {
      set({ loading: false });
      throw error;
    }
    finally {
      set({ loading: false });
    }
  },

}));

export default useWorkspaceStore;
