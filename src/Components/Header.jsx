import Logo from '../images/LOGO.jpeg' 
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <NavLink to="/Fond">
                <img src={Logo} alt="Logo" width="50" height="50" />
            </NavLink>
            <nav className='nav'>
                <ul>
                    <li className='nav_link'><NavLink to="/Fond">
                    Головна
                    </NavLink></li>
                     <li className='nav_link'><NavLink to="/Help">
                    Допомога
                    </NavLink></li>
                     <li className='nav_link'><NavLink to="/Questions">
                    Часті запитання
                    </NavLink></li>
                    <li className='nav_link'><NavLink to="/Support">
                    Підтримати
                    </NavLink></li>
                    <li className='nav_link'>
                        <a href="tel:+380 63 258 3366">+380 63 258 3366
                    </a>
                    </li>
                </ul>
                
                
                <button>UA</button>
            </nav>
            
        </header>
    )
}