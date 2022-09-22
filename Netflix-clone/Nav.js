import React,{useState,useEffect} from 'react';
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
        <img
        className="nav__logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar" 
        src="https://occ-0-2041-3662.1.nflxso.net/art/0d282/eb648e0fd0b2676dbb7317310a48f9bdc2b0d282.png"
        alt="Netflix Avatar"
      />
     </div>
  );
}
export default Nav
