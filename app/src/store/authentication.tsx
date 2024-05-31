// src/store/useAuthStore.js
import { create } from 'zustand';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User, sendPasswordResetEmail } from 'firebase/auth';
import { axios } from '../config/axios';

interface AuthState {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  // Register user by calling the backend API
  signUp: async (email: string, password: string) => {
    set({ loading: true });

    try {
      await axios.post("/accounts/", { email, password });

      await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
      set({ loading: false });

      throw error;
    }
    finally {
      set({ loading: false });
    }
  },

  // Sign in user
  signIn: async (email: string, password: string) => {
    set({ loading: true });
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } 
    catch (error) {
      set({ loading: false });

      throw error;
    }
    finally {
      set({ loading: false });
    }
  },

  resetPassword: async (email: string) => {
    set({ loading: true });
    try {
      await sendPasswordResetEmail(auth, email);
    } 
    catch (error) {
      set({ loading: false });

      throw error;
    }
    finally {
      set({ loading: false });
    }
  },

  // Sign out user
  signOut: async () => {
    try {
      await signOut(auth);
    } 
    catch (error) {
      throw error;
    }
    finally {
      set({ user: null });
    }
  },
}));

onAuthStateChanged(auth, (user) => {
  useAuthStore.setState({ user, loading: false });
});

export default useAuthStore;