import axios from "axios";
import { writable } from "svelte/store";

export const removeToken = () => {
  axios.defaults.headers.common["Authorization"] = null;
  localStorage.removeItem("token");
  tokenStore.set(null);
}

export const removeUser = () => {
  localStorage.removeItem("user");
  userStore.set(null);
}

export const saveToken = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("token", token);
  tokenStore.set(token);
};

export const saveUser = (user: any) => {
  localStorage.setItem("user", JSON.stringify(user));
  userStore.set(user);
};

export const userStore = writable(
  localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
);

export const tokenStore = writable(
  localStorage.getItem("token") ? localStorage.getItem("token") : null
);
