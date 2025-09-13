import type { User } from '../lib/auth';

export async function fetchRandomUser(): Promise<User> {
  const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
  if (!res.ok) throw new Error('Failed to fetch user');
  const data = await res.json();
  const u = data.results[0];
  const user: User = {
    name: `${u.name.first} ${u.name.last}`,
    email: u.email,
    picture: u.picture.large
  };
  return user;
}
