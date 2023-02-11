import { ChangeEvent,useState } from 'react';


export const useSearch = <T extends Object>(initialSearch:T) => {
    const [searchState, setSearchState] = useState(initialSearch)

    const onInputChange = ({target}:ChangeEvent<HTMLInputElement>) => {
        const { value, name } = target;

        setSearchState({
            ...searchState,
            [name]: value
        });
    }
    
    const onResetSearch = ()=>{
        setSearchState(initialSearch)
    }

    
    return {
        ...searchState,
        searchState,
        onInputChange,
        onResetSearch,
        
    }
}