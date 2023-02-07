export interface NewsData {
    status:       string;
    totalResults: number;
    articles:     Articles[];
}

export interface Articles {
    source:      Source;
    author:      null | string;
    title:       string;
    description: null | string;
    url:         string;
    urlToImage:  string;
    publishedAt: string | null;
    content:     null | string;
}

export interface Source {
    id:   null | string;
    name: string;
}


export interface Date {
    date: string;
}