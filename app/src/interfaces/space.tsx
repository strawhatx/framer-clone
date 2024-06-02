
// src/interfaces/space.tsx
export interface Space {
  userId: string;
  image: string | null;
  name: string;
  type: string;
  projects: [] | null;
  tags: [] | null;
}