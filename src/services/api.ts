import axios from "axios";
import { tokenStore } from "../auth";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

axios.defaults.baseURL = API_BASE_URL;

tokenStore.subscribe((v) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${v}`;
});

export interface ErrorResponse {
  message: string;
  errors: { label: string; type: string; message: string }[];
}

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

export interface ArticleCreateDTO {
  title: string;
  content: string;
  image?: string;
}

export default {
  articles: {
    create: async ({ title, content, image }: ArticleCreateDTO) => {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      const response = await axios.post<IArticle>("/articles", formData);
      return response;
    },
    getAll: async (): Promise<IArticle[]> => {
      const response = await axios.get("/articles");
      return response.data as IArticle[];
    },
  },
  users: {
    login: ({ email, password }: UserLoginDTO) =>
      axios.post("/login", { email, password }),
    signup: ({ name, email, password }: UserSignupDTO) =>
      axios.post("/signup", { name, email, password }),
  },
  errors: {
    isErrorResponse: (error) => {
      const hasMessage = error.message && typeof error.message === "string";
      const hasErorrsArr = error.errors && Array.isArray(error.errors);
      return hasMessage && hasErorrsArr;
    },
    parseErrors(body: ErrorResponse) {
      return body.errors.map((e) => `${e.label.split(".")[1] || e.label}: ${e.message}`);
    },
  },
};
