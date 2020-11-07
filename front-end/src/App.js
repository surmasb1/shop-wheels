import React from 'react';
import './App.css';
import MenuContainer from "./components/Menu/MenuContainer";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WheelContainer from "./components/Wheels/Wheel/WheelContainer";
import store from "./redux/redux-store";
import { Provider} from "react-redux";
import WheelsContainer from "./components/Wheels/WheelsContainer";
import CartContainer from "./components/Cart/CartContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import AdminContainer from "./components/Admin/AdminContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import LoginContainer from "./components/Login/loginContainer";
import RouterUpdateWheelContainer from "./components/updateWheel/UpdateWheelContainer";


function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Provider store={store}>
               {/*    <div>
                      <NavigatorContainer/>
                  </div> */}
                   <div>
                      <MenuContainer/>
                  </div>
                  <div className="Header">
                        <HeaderContainer/>
                  </div>
                 
                  <div>
                      <SidebarContainer/>
                  </div>
                  <div>
                      <Switch>
                  <Route exact path='/wheels'
                         render={() => <WheelsContainer/>}/>
                  <Route  path='/wheels/:id?'
                         render={() => <WheelContainer/>}/>
                  <Route  path='/cart'
                         render={() => <CartContainer/>}/>
                  <Route  path='/admin'
                          render={() => <AdminContainer/>}/>
                  <Route  path='/login'
                          render={() => <LoginContainer/>}/>
                  <Route  path='/update/:id'
                          render={() => <RouterUpdateWheelContainer/>}/>
              </Switch>  
                  </div>
                  <div>
                     <Footer/>
                  </div>
 
              </Provider>
          </BrowserRouter>
      </div>
  );
}

export default App;
