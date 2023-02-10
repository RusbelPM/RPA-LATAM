import { useEffect, useState } from "react";
import { Axios } from "../helpers/axios";
import { dataDefault } from "../helpers/data";
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
  }, [title]);
  //funciona con note -> no puedo comprobar por falta de apiKey
  const getNote = async () => {
    console.log(await Axios("", 1, title));
    const data: Articles[] = await Axios("", 1, title.toLowerCase());
    console.log("resp", data);
    if (data.length > 0) {
      setNote(data[0]);
    } else {
      setNote(dataDefault);
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
