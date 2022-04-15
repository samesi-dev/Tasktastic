import React, {useState}  from 'react';
import { Button } from './Button';
import {MenuItems} from './MenuItems';
import './Navbar.css';

const Navbar = () => {

    const [state, setStatus] = useState(0);
    return (<div>
     <nav className="navbar-items">
     <h1 className="navbar-logo">tasktastic</h1>
     <div className="menu-icon" onClick={() => setStatus(!state)}> 
     <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i> 
     </div>
     <ul className={state ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item,index) => {
            return (
                <li key={index}> 
                    <a className={item.cName} href="{item.url}">
                        {item.title}
                    </a>
                </li>                     
            )
        })}
    </ul>
    <Button>try free</Button>
     </nav>
        </div>)
}
export default Navbar;