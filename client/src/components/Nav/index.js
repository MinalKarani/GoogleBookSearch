import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor:"pink!important"}}>
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-brand" href="/search">Search</a>
      <a className="navbar-brand" href="/saved">Saved</a>
 
    </nav>
  );
}

export default Nav;
