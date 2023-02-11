import React from 'react';
import { Sniper } from '../../global-component/loading/sniper';
import { useArticles } from '../../hooks';

interface Props {
    resul: string;
}

const classes = {
  noResult:'noresult',
  result:'noresult__result',  
}

export const NotResult: React.FC<Props> = ({resul}) => {

     const { isLoading } = useArticles();

     if(isLoading) {
        return <Sniper/>
    }

  return (
      <div className={classes.noResult}>
        <div>
          <h1>:(</h1>
          <h3 itemProp='name'>Lo sentimos, pero no hemos encontrado lo que estás buscando. </h3>
          <h3 itemProp='name' className={classes.result}>"{resul}"</h3>
          <a itemProp='url' href='/'>
            <button >Regresar a Home</button>
          </a>
        </div>
      </div>
  )
}