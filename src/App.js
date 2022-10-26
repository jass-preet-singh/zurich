import './App.css';
import Home from './components/pages/Home';
import {Routes, Route, NavLink, Link } from 'react-router-dom'
import Matrics from './components/pages/Matrics';
import Sidebar from './shared/components/Sidebar';
import Logo from "./assets/images/zurich-logo.png";
import './assets/styles/style.css';
import './assets/styles/bootstrap.min.css';
function App() {
  return (
    <div>
    <header>
        <div className="navbar bg-light p-3">
          <NavLink className="text-light text-decoration-none navbar-item" activeClassName="is-active" to="/">    
            <img src={Logo} alt="" />
          </NavLink>
        </div>
    </header>
    <section id="main" className="main">
        <div className="container-fluid px-0">
            <div className="custom-grid">
                <Sidebar />
                <div className="content container-fluid p-0">
                <div>
                <Routes>                 
                 <Route path='/' exact element={<Home />} />
                  <Route path='/matrics' exact element={<Matrics />} />
                  </Routes>
                </div>                   
                </div>
            </div>
        </div>
    </section>
</div>
  );
}

export default App;
