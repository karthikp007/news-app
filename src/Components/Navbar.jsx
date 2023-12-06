/* eslint-disable react/prop-types */
import { signOut } from "firebase/auth"
import {database} from '../FirebaseConfigs';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({setCategory}) => {

  const [login,setLogin] = useState(false);

  const history = useNavigate();

  const handleClick = () => {
    if (!login) {
      history('/signin-signup');
    } else {
      signOut(database).then(val=>{
        console.log(val,"val")
        history('/');
      });
    }
  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News App</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* setting category in the nav bar */}
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favorites">Favorites</Link>
        </li>
      </ul> 
        
        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>{login?'Logout':'Login'}</button>
    </div>
  </div>
</nav>
  )
}

export default Navbar;
