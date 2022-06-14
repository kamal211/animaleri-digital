import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className ="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className ="container-fluid">
    <a className ="navbar-brand fw-bold fs-4" href="#">AFRICA</a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <a className ="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link" href="#">Products</a>
        </li>

        <li className ="nav-item">
          <a className ="nav-link" href="#">About us</a>
        </li>

        <li className ="nav-item">
          <a className ="nav-link" href="#">Contact</a>
        </li>
       
      </ul>
      <div className Name="buttons">
          <a href="" className Name="btn btn-outline-dark " >login <i className Name="fa fa-sign-in me-1"></i></a>

      </div>
      <div className Name="buttons">
          <a href="" className Name="btn btn-outline-dark ms-2">Register <i className Name="fa fa-user-plus me-1"></i></a>

      </div>
      <div className Name="buttons">
          <a href="" className Name="btn btn-outline-dark ms-2 vb ">Cart <i className Name="fa fa-shopping-cart me-1"></i></a>

      </div>
      {/* <form className ="d-flex">
        <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className ="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar; 
