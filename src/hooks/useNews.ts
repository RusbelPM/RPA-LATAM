import { useEffect, useState } from "react";
import { Axios } from "../helper/axios";
import { Articles } from "../interfaces/interfaces";

export const useBusiness = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [business, setBusiness] = useState<Articles[]>([]);

  const getSectors = async () => {
    const resp: Articles[] = await Axios("business");

    setBusiness(resp);
    setIsLoading(false);
  };

  useEffect(() => {
    getSectors();
  }, []);

  return {
    isLoading,
    business,
  };
};

export const useScience = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [science, setScience] = useState<Articles[]>([]);

  const getSectors = async () => {
    const resp: Articles[] = await Axios("science");

    setScience(resp);
    setIsLoading(false);
  };

  useEffect(() => {
    getSectors();
  }, []);

  return {
    isLoading,
    science,
  };
};

export const useHealth = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [health, setHealth] = useState<Articles[]>([]);

  const getSectors = async () => {
    const resp: Articles[] = await Axios("health");

    setHealth(resp);
    setIsLoading(false);
  };

  useEffect(() => {
    getSectors();
  }, []);

  return {
    isLoading,
    health,
  };
};
export const useTecnology = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [technology, setTecnology] = useState<Articles[]>([]);

  const getSectors = async () => {
    const resp: Articles[] = await Axios("technology");

    setTecnology(resp);
    setIsLoading(false);
  };

  useEffect(() => {
    getSectors();
  }, []);

  return {
    isLoading,
    technology,
  };
};
