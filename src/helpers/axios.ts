import axios from 'axios';
import { NewsData } from '../interfaces';

const key = '8a5d33ce46894c459dd63de2e871b6f8'

const baseURL = 'https://newsapi.org/v2/top-headlines'

export const Axios = async (category: string = 'general', pageSize: number = 20, query: string = '') => {

    if (query) {
        return axios.get(baseURL, {
            params: {
                language: 'en',
                apiKey: key,
                q: query
            }
        })
            .then(({ data }: { data: NewsData }) => {
                return data.articles;
            }).catch((err) => {
                return err;
            });
    } else {
        return axios.get(baseURL, {
            params: {
                language: 'en',
                apiKey: key,
                category,
                pageSize
            }
        })
            .then(({ data }: { data: NewsData }) => {
                return data.articles;
            }).catch((err) => {
                return err;
            });
    }
}
