import { NavLink } from 'react-router-dom';
import { routes } from '../../router/routes';
import { Subscribe } from '.';


const clases = {
    navbar: 'nav-bar',
    subscribe:'nav-bar__subscribe',
}

export const Navbar = () => {
    return (
            <div className={clases.navbar} >
                <div className={clases.subscribe}>
                    <Subscribe/>                                        
                </div>
                <nav>
                    <ul  style={{display:"flex",background:"#fff" }}>
                        {
                            routes.map( ({to, name}) => (
                                <li className='category' key={to}>
                                    <NavLink to={to} className={ ({isActive}) => isActive? 'nav-active' : '' } >• {name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    
                </nav>
                <hr />
            </div>
        
        )
}
    