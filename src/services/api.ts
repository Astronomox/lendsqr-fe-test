import { User } from "../types";
import { saveUsers, getUsers } from "../utils/storage";
import usersData from "../data/users.json";

export const fetchUsers = async (): Promise<User[]> => {
  const cached = getUsers();
  if (cached) {
    const allActive = cached.map((u) => ({ ...u, status: "active" as const }));
    return allActive;
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const users = (usersData as User[]).map((u) => ({
    ...u,
    status: "active" as const,
  }));

  saveUsers(users);
  return users;
};