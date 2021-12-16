import React,{useState} from 'react';
import './navbar.css';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';

 const Menu = () =>(
     <>
    <p><a href="home"/>Dummy1</p>
    <p><a href="home"/>Dummy2</p>
    <p><a href="home"/>Dummy3</p>
    <p><a href="home"/>Dummy4</p>
    </>
 )
const Navbar = () => {
 const [toggleMenu,setToggleMenu]=useState(false);
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="navbar-sign">
                   <p>sign in</p>
                   <button type="button"> sign up</button>
            </div>
            
            <div className="navbar-menu">
                {toggleMenu 
                ? <RiCloseLine color="#fff " size={27} onClick={()=>setToggleMenu(false)} />
                 :<RiMenu3Line color="#fff " size={27} onClick={()=>setToggleMenu(true)} />
               }
               {toggleMenu &&(
                   <div className="navbar-menu_container scale-up-center">
                       <div className="navbar-menu_container-links">
                          <Menu/>
                          <div className="navbar-menu_container-links-sign">
                               <p>sign in</p>
                              <button type="button"> sign up</button>
                         </div>
                       </div>
                   </div>
                   
               )}
            </div>
        </div>
    )
}

export default Navbar
