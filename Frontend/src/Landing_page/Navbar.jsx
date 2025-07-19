import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return ( 
        // <div className='cantainer'>
        // <>
<nav class="navbar navbar-expand-lg bg-light navbar-light bg-light border-bottom p-3">
    {/* <div className="cantainer-fluid"> */}
  <Link class="navbar-brand" to="/">
    <img src="Assets/logo.svg" alt="logo" style={{width: "25%", marginLeft: "40px"}} />
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="d-flex " role='search'>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active ml-3">
        <Link class="nav-link" to="/signup">Signup <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Product
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      <li class="nav-item active">
        <Link class="nav-link " to="/product">Product</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link " to="/pricing">Pricing</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/support">Support</Link>
      </li>
    </ul>
    </form>
    
    {/* <form class="form-inline my-2 my-lg-0 d-flex">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
  {/* </div> */}
</nav>
        // </>
     );
}

export default Navbar;