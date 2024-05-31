// src/store/useAuthStore.js
import { create } from 'zustand';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { axios } from '../config/axios';

const useWorkspaceStore = create((set) => ({
  active: null,
  spaces: [],
  
}));

export default useWorkspaceStore;