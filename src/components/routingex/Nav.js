import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav=()=>{
    return(
        <div>
            <Link to="/">home</Link>
            <NavLink to="/about">about</NavLink>
        </div>
    )

}
export default Nav;
///////////////////////////imoirtant????????????//
// we use here Link to make the page not reloaded repalce it with the prev fucntion prev etc
// and repalce herf with to .
//
//navlink add active class .. you can inspect it in browser 
// the active class can used with the css its like when the active is acitve make the color red