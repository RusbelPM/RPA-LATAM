import { useEffect, useState } from "react";
import { Axios } from "../helpers/axios";
import { Articles } from "../interfaces";

export const useArticles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState<Articles[]>([]);
  const getSectors = async () => {
    const resp: Articles[] = await Axios();
    setArticles(resp);
    setIsLoading(false);
  };
  useEffect(() => {
    getSectors();
  }, []);
  return {
    isLoading,
    articles,
  };
};

export const useNote = (title: string = "") => {
  const [isLoading, setIsLoading] = useState(true);

  const [note, setNote] = useState<any>();
  useEffect(() => {
    getNote();
  }, []);
  const getNote = async () => {
    console.log(await Axios("", 1, title));
    const data: Articles[] = await Axios("", 1, title.toLowerCase());
    console.log("resp", data);
    if (data.length > 0) {
      setNote(data[0]);
    } else {
      setNote({
        source: {
          id: null,
          name: "SamMobile",
        },
        author: "SamMobile, Sagar Naresh",
        title:
          "Samsung Galaxy S23 Ultra durability test shows how 'rock-solid' it is - SamMobile - Samsung news",
        description:
          "The Galaxy S23 Ultra has impressed everyone with its performance improvements. In fact, it is the fastest Android smartphone in ...",
        url: "https://www.sammobile.com/news/galaxy-s23-ultra-torture-test-rock-solid/",
        urlToImage:
          "https://www.sammobile.com/wp-content/uploads/2023/02/Samsung-Galaxy-S23-Ultra-Misty-Lilac-Rear-Design-720x405.jpg",
        publishedAt: "2023-02-10T04:53:00Z",
        content:
          "The Galaxy S23 Ultra has impressed everyone with its performance improvements. In fact, it is the fastest Android smartphone in the world. However, not much has been said about its durability. The Ga… [+1570 chars]",
      });
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    note,
  };
};

export const useCategories = (category: string = "") => {
  const [isLoading, setloading] = useState(true);
  const [categories, setCategories] = useState<Articles[]>([]);

  useEffect(() => {
    getCategories();
    //eslint-disable-next-line
  }, [category]);

  const getCategories = async () => {
    const data: Articles[] = await Axios(category);
    setCategories(data);
    setloading(false);
  };

  return {
    isLoading,
    categories,
  };
};
