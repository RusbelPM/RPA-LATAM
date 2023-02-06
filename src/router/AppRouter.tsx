import { Routes, Route, Navigate} from 'react-router-dom'
import { routes } from './routes';
import { NoteNews } from '../page/NoteNews';

import { Navbar, Footer } from '../components';

export const AppRouter = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        {
          routes.map( route =>(
            <Route
            key={route.to}
            path={route.path} 
            element={<route.Component/>} />            
          ) )
        }
        <Route path="note/:id" element={<NoteNews/>}/>
        
        <Route path="*" element={ <Navigate to="/" replace /> } />
      </Routes>
      <Footer/>
    </>
  )
}
