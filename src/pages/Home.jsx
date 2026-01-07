import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
import imgMe from "../../src/assets/FinalMe.gif";
import scrollTop from "../../src/assets/scrollTop.png";
import scrollBottom from "../../src/assets/scrollBottom.png";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/portfolio");
  }

  return (
    <div className={classes.container}>
      {/* Scroll Header */}
      <div className={classes.scrollHeader}>
        <img src={scrollTop} alt="Scroll Top" className={classes.scrollImg} />
      </div>

      {/* Page Content */}
      <div className={classes.content}>
        <h1 className={classes.h1}>Home Page</h1>
        <p className={classes.p}>Good morrow adventurer!</p>

        <div className={classes.imgWrapper}>
          <img src={imgMe} alt="Me" className={classes.img} />
          <div className={classes.statsBox}>
            <h3>Developer Exp</h3>
            <ul>
              <li>
                React / JavaScript
                <div className={classes.statBar}>
                  <div className={classes.statFill} style={{ width: "80%" }} />
                </div>
              </li>
              <li>
                C, C#, C++
                <div className={classes.statBar}>
                  <div className={classes.statFill} style={{ width: "70%" }} />
                </div>
              </li>
              <li>
                Java OOP
                <div className={classes.statBar}>
                  <div className={classes.statFill} style={{ width: "90%" }} />
                </div>
              </li>
              <li>
                Python
                <div className={classes.statBar}>
                  <div className={classes.statFill} style={{ width: "50%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <p className={classes.p}>
          I am a developer and sometimes an artist. Feel free to browse around
          and contact me if you have any questions.
        </p>

        <p className={classes.p}>
          <button onClick={navigateHandler} className={classes.button}>
            Portfolio
          </button>
        </p>
      </div>
      <div className={classes.scrollFooter}>
        <img
          src={scrollBottom}
          alt="Scroll Top"
          className={classes.scrollImg}
        />
      </div>
    </div>
  );
}

export default HomePage;
