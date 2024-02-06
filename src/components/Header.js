import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Fun Recipes</a>
          <a className="navbar-brand" href="#">Home</a>
          <a className="navbar-brand" href="#">Recipes</a>
          <a className="navbar-brand" href="#">About</a>
        </div>
    </nav>
    </header>
  );
}

export default Header;