import React from "react";

const styles = {
  wrapperStyle: {
    minHeight: "100%",
    paddingBottom: "100px"
  }
}

function Wrapper({ children }) {
  return (
    <div style={styles.wrapperStyle} className="wrapper">
      { children }
    </div>
  );
}
export default Wrapper;
