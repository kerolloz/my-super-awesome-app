import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;
console.log({ API_BASE_URL });


interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IArticle {
  id: string;
  title: string;
  content: string;
  user: IUser;
  createdAt: string;
}

export default {
  articles: {
    getAll: async (): Promise<IArticle[]> => {
      const response = await axios.get(`${API_BASE_URL}/articles`);
      return response.data as IArticle[];
    }
  },
  users: {
    login: (email: string, password: string) =>
      axios.post(`${API_BASE_URL}/users/login`, { user: { email, password } }),
    register: (name: string, email: string, password: string) =>
      axios.post(`${API_BASE_URL}/users`, { user: { name, email, password } })
  }
};
