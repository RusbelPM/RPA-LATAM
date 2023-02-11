import { Routes, Route, Navigate} from 'react-router-dom'
import { routes } from './routes';
import { NoteNews } from '../page/note-news';
import { Navbar, Footer } from '../components';
import { Search } from '../page/search';

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
        <Route path="/note/:id" element={<NoteNews/>}/>
        <Route path="search" element={<Search/>}/>

        
        <Route path="*" element={ <Navigate to="/" replace /> } />
      </Routes>
      <Footer/>
    </>
  )
}
