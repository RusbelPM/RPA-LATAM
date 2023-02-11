import axios from "axios";
import { NewsData } from "../interfaces";

const key = "f93bdb1532324dfca98451419c0f020c";

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
          q: query,
          apiKey: key,
          language: "en",
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
