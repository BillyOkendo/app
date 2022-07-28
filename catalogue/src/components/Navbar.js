import { NavLink} from "react-router-dom";


import React from "react";

const Navbar = () => {
    return (
        <div className="nav">
           
           
            

            
                <NavLink 
                  to="/"
                  
                >
                    <button className="btn">Home</button>
                </NavLink>
                
                
               
                <NavLink 
                  to="/catalogue"
                  
                >
                    <button className="btn">catalogue</button>
                </NavLink>
                
            
           
        </div>
    );
};
export default Navbar;