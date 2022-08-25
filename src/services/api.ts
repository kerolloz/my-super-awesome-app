import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

axios.defaults.baseURL = API_BASE_URL;

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface UserSignupDTO {
  name: string;
  email: string;
  password: string;
}

interface UserLoginDTO {
  email: string;
  password: string;
}

export interface IArticle {
  id: string;
  title: string;
  content: string;
  user: IUser;
  image?: string;
  createdAt: string;
}

export default {
  articles: {
    getAll: async (): Promise<IArticle[]> => {
      const response = await axios.get('/articles');
      return response.data as IArticle[];
    },
  },
  users: {
    login: ({ email, password }: UserLoginDTO) =>
      axios.post('/login', { email, password }),
    signup: ({ name, email, password }: UserSignupDTO) =>
      axios.post('/signup', { name, email, password }),
  },
};
