export type User = {
  name: string;
  email: string;
  picture: string;
};

const KEY = 'dekamond_user_v1';

export function saveUser(user: User) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(user));
}

export function getUser(): User | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as User;
  } catch (e) {
    return null;
  }
}

export function clearUser() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(KEY);
}
