import React from "react";
import s from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const menu = [
    { ua: "Головна", eng: "main" },
    { ua: "Побутова техніка", eng: "household-appliances" },
    { ua: "Колеса", eng: "wheels" },
    { ua: "Садова техніка", eng: "garden-equipment" },
    { ua: "Меблі", eng: "furniture" },
  ];
  return (   
        <div className={s.wrap} >
          <div>sdfds</div>
          <div className={s.menu}>
        {menu.map((item, index) => {
          let path = "/" + item.eng;
          return (
            
            <NavLink
              className={s.link}
              key={index}
              activeClassName={s.active}
              to={path}
            >
              {item.ua}
            </NavLink>
          );
        })}
   
        </div>
                <div>ihiiiguyuvjhv</div>

        </div>
          
      
    
  );
};

export default Menu;
