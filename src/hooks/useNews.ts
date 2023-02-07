import { useEffect, useState } from 'react';
import { Axios } from '../helper/axios';
import { Articles } from '../interfaces/interfaces';


export const useNote = (title: string = '') => {
    const [isLoading, setIsLoading] = useState(true)

    const [note, setNote] = useState<any>();    
    
    const getNote = async () => {
        const data: Articles[]  = await Axios('', 1, title);
        console.log('resp', data)
        if (data.length > 0) {
            setNote(data[0]);
        } else {
            setNote({})
        }

        setIsLoading(false);
    }

    useEffect(() => {
        getNote();
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
    }, [])

    
    return {
        isLoading,
        articles
    }
}








