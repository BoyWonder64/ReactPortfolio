import { Link, useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
import imgMe from "../../src/assets/FinalMe.gif";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/portfolio");
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Home Page</h1>
      <p className={classes.p}>Hello! This is my portfolio site</p>
      <img src={imgMe} alt="Me" className={classes.img} />
      <br />
      <p className={classes.p}>I am a developer and sometimes an artist. Feel free to 
        browse around and contact me if you have any questions. 
      </p>
      <p className={classes.p}>
        <button onClick={navigateHandler} className={classes.button}>
          Portfolio
        </button>
      </p>
    </div>
  );
}

export default HomePage;
