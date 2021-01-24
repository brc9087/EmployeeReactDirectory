const styles = {
  wrapperStyle: {
    minHeight: "100%",
    paddingBottom: "100px"
  }
}

function Wrapper(props) {
  return <main style={styles.wrapperStyle} className="wrapper">{props.children}</main>;
}

export default Wrapper;
