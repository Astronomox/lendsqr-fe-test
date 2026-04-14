import { User } from "../types";

const USERS_KEY = "lendsqr_users";
const SELECTED_USER_KEY = "lendsqr_selected_user";

export const saveUsers = (users: User[]): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getUsers = (): User[] | null => {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : null;
};

export const saveSelectedUser = (user: User): void => {
  localStorage.setItem(SELECTED_USER_KEY, JSON.stringify(user));
};

export const getSelectedUser = (): User | null => {
  const data = localStorage.getItem(SELECTED_USER_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearSelectedUser = (): void => {
  localStorage.removeItem(SELECTED_USER_KEY);
};