import { useEffect, useState } from 'react';
import { Axios } from '../helper/axios';
import { Articles } from '../interfaces';
import { dataDefault } from "../helpers/data";

export const useNote = (title: string = '') => {
    const [isLoading, setIsLoading] = useState(true)

    const [note, setNote] = useState<any>();    
    
    const getNote = async () => {
        const data: Articles[]  = await Axios('', 1, title);
        if (data.length > 0) {
            setNote(data[0]);
        } else {
            setNote(dataDefault)
        }

        setIsLoading(false);
    }

    useEffect(() => {
        getNote();
        //eslint-disable-next-line
    }, [])
    
    return {
        isLoading,
        note
    }
}

export const useArticles = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState<Articles[]>([]);    
    
    const getSectors = async () => {
        const resp: Articles[] = await Axios();
        
        setArticles(resp);
        setIsLoading(false);
    }

    useEffect(() => {
        getSectors();
        //eslint-disable-next-line
    }, [])

    
    return {
        isLoading,
        articles
    }
}

export const useArticle= (query:string = '') => {
    const [isloading, setIsloading] = useState(true);
    const [searchNews, setGlobalNews ] = useState<Articles[]>([]);

    useEffect(() => {
        getSearchNews()
        //eslint-disable-next-line
    }, [query]) 

    const getSearchNews = async() => {
        const data:Articles[] = await Axios('',10,query);
        setGlobalNews(data)
        setIsloading(false)
    }
    return {
        isloading,
        searchNews
    }
}

export const useCategories= (category:string = '') => {
    const [isLoading, setloading] = useState(true);
    const [categories, setCategories ] = useState<Articles[]>([]);

    
    const getCategories = async() => {
        const data:Articles[] = await Axios(category);
        setCategories(data)
        setloading(false)
    }
    useEffect(() => {
        getCategories()
        //eslint-disable-next-line
      }, [category]) 

    return {
        isLoading,
        categories
    }
}

