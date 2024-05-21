// src/store/useAuthStore.js
import { create } from 'zustand';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { axios } from '../config/axios';

const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

  // Initialize Firebase authentication listener
  initializeAuth: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
  },

  // Register user by calling the backend API
  signUp: async (email, password) => {
    set({ loading: true });

    try {
      const response = await axios.post("/accounts/", { email, password })

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const user = await response.json();

      set({ user, loading: false, error: null });
    }
    catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Sign in user
  signIn: async (email, password) => {
    set({ loading: true });
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } 
    catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Sign out user
  signOut: async () => {
    try {
      await signOut(auth);
      set({ user: null });
    } 
    catch (error) {
      set({ error: error.message });
    }
  },
}));

export default useAuthStore;