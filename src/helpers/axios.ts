import axios from "axios";
import { NewsData } from "../interfaces";

const key = "09554bc11b0b4e4cb4d22c519e42604b";

const baseURL = "https://newsapi.org/v2/top-headlines";

export const Axios = async (
  category: string = "general",
  pageSize: number = 20,
  query: string = ""
) => {
  if (query) {
    return axios
      .get(baseURL, {
        params: {
          language: "en",
          apiKey: key,
          q: query,
        },
      })
      .then(({ data }: { data: NewsData }) => {
        return data.articles;
      })
      .catch((err) => {
        return err;
      });
  } else {
    return axios
      .get(baseURL, {
        params: {
          language: "en",
          apiKey: key,
          category,
          pageSize,
        },
      })
      .then(({ data }: { data: NewsData }) => {
        return data.articles;
      })
      .catch((err) => {
        return err;
      });
  }
};
