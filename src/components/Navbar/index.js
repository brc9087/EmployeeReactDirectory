import React from "react";
import SearchBar from "../SearchBar"

const styles = {
  navStyles: {
    padding: "20px 25px",
    margin: "0 auto"
  },
  searchAreaStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  }
}



function Navbar() {
  return (
    <nav style={styles.navStyles} className="navbar navbar-expand-lg navbar-light bg-light">
      <div style={styles.searchAreaStyles} className="search-area col-4">
        <SearchBar />
      </div>
    </nav>
  );
}

export default Navbar;
