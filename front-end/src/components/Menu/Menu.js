import React,{useRef} from "react";
import s from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import img from '../../images/protector.jpg'

const Menu = (props) => {
  // Когда пользователь прокручивает страницу, выполните myFunction
window.onscroll = function() {myFunction()};
const header = useRef(null);

let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > 0) {
    header.current.style.position = 'fixed'
    header.current.style.top = 0


    console.log('+++')
  } else {
    header.current.style.position = ''
    header.current.style.top = ''
console.log('---')
  }
}
  let a =[];
  let wheels = props.wheels===undefined ? a : props.wheels.filter(w=>w.cart===true ) ;
  const menu = [
    { ua: "Головна", eng: "main" },
    { ua: "Побутова техніка", eng: "household-appliances" },
    { ua: "Колеса", eng: "wheels" },
    { ua: "Садова техніка", eng: "garden-equipment" },
    { ua: "Меблі", eng: "furniture" },
  ];
  return (   
        <div ref={header} className={s.wrap} >
          
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
   
        
        <div className={s.wrapcart}>
          <NavLink  to="/cart">
                      <div className={s.divcart}>
                        {wheels.length}</div>
                    <img  alt='lorem' src="https://img.icons8.com/pastel-glyph/48/000000/shopping-cart--v2.png"/>
                    </NavLink>
        </div>
                    
                </div>
  );
};

export default Menu;
