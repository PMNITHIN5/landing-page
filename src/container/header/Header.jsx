import React from 'react';
import './header.css';
import people from '../../assests/people.png';
import ai from '../../assests/ai.png';
const Header = () => {
    return (
    <div className="header section_padding" id="home">
         <div className="header-content">
              <h1 className="gradient__text"> Lets Build Something amazing with OpenAI</h1>
              <p> fgdfgmfflegv bdndmdfntnglf dnkbmdlvb mlthdbdgkbbmd
                  bdklhgdmkmgldgilgmhg hnrhknvbfgnhgb fgnhghmgdgnrhng
              </p>
                <div className="header-content_input">
                 <input type= "email" placeholder="your email address"/>
                 <button  type="button">get started</button>
                </div>
                <div className="header-content_people">
                    <img src={people}/>
                    <p> 1600 followers</p>
                </div>
               
         </div>
         <div className="header-image">
                     <img src={ai} alt="ai"/>
         </div>
    </div>
    )
}

export default Header
