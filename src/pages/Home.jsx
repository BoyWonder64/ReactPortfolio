import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
// import imgMe from "../../src/assets/noBackgroundMe.gif";
import idleMe from "../../src/assets/idle_Me.gif";
// import scrollTop from "../../src/assets/scrollTop.png";
// import scrollBottom from "../../src/assets/scrollBottom.png";

import scrollTop2 from "../../src/assets/ScrollTop2.png";
import scrollBottom2 from "../../src/assets/ScrollBottom2.png";
import speechBubble from "../../src/assets/single-line-tilemap-export.png";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/portfolio");
  }

  return (
    <div className={classes.container}>
      {/* Scroll Header */}
      <div className={classes.scrollHeader}>
        <img src={scrollTop2} alt="Scroll Top" className={classes.scrollImg} />
      </div>

      {/* Page Content */}
      <div className={classes.content}>
        <h1 className={classes.h1}>Home Page</h1>
        {/*<p className={classes.p}>Good morrow adventurer!</p>*/}

        <div className={classes.imgWrapper}>
          <div className={classes.speechBubbleWrapper}>
            <img
              className={classes.speechBubbleImg}
              src={speechBubble}
              alt="Speech bubble"
            />

            <div className={classes.speechText}>
              Hello!
              {/* <br /> */}
              &nbsp;Scroll over each item in my inventory
            </div>
          </div>

          <img className={classes.IdleMeImg} src={idleMe} alt="Me" />

          {/* <div className={classes.statsBox}>
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
          </div> */}

          <div className={classes.inventory}>
            <h3 className={classes.inventoryTitle}>Developer Inventory</h3>

            <div className={classes.inventoryGrid}>
              {/* C# */}
              <div className={classes.item}>
                <span className={classes.itemName}>C#</span>
                <div className={classes.itemTooltip}>
                  <strong>C#</strong>
                  <p>
                    Used in backend services and cloud-based components,
                    including APIs and validation-heavy systems.
                  </p>
                  <p>
                    <em>Role:</em> Backend / Cloud
                  </p>
                  <p>
                    <em>Proficiency:</em> Advanced
                  </p>
                </div>
              </div>

              {/* React */}
              <div className={classes.item}>
                <span className={classes.itemName}>React JS</span>
                <div className={classes.itemTooltip}>
                  <strong>React / JavaScript</strong>
                  <p>
                    Component-driven UI development, routing, animations, and
                    interactive frontend features. Mostly personal and
                    portfolio-based work.
                  </p>
                  <p>
                    <em>Role:</em> Frontend
                  </p>
                  <p>
                    <em>Proficiency:</em> Intermediate
                  </p>
                </div>
              </div>

              {/* Angular */}
              <div className={classes.item}>
                <span className={classes.itemName}>Angular</span>
                <div className={classes.itemTooltip}>
                  <strong>Angular</strong>
                  <p>
                    Enterprise-style frontend development including routing and
                    record creation features.
                  </p>
                  <p>
                    <em>Role:</em> Frontend
                  </p>
                  <p>
                    <em>Proficiency:</em> Beginner
                  </p>
                </div>
              </div>

              {/* Java */}
              <div className={classes.item}>
                <span className={classes.itemName}>Java</span>
                <div className={classes.itemTooltip}>
                  <strong>Java</strong>
                  <p>
                    Object-oriented design, data structures, and middleware
                    services producing JSON for cloud compliance systems.
                  </p>
                  <p>
                    <em>Role:</em> Backend
                  </p>
                  <p>
                    <em>Proficiency:</em> Advanced
                  </p>
                </div>
              </div>

              {/* Python */}
              <div className={classes.item}>
                <span className={classes.itemName}>Python</span>
                <div className={classes.itemTooltip}>
                  <strong>Python</strong>
                  <p>
                    Scripting, automation, and tooling for development workflows
                    and problem-solving.
                  </p>
                  <p>
                    <em>Role:</em> Utility / Automation
                  </p>
                  <p>
                    <em>Proficiency:</em> Intermediate
                  </p>
                </div>
              </div>

              {/* PowerShell */}
              <div className={classes.item}>
                <span className={classes.itemName}>PowerShell</span>
                <div className={classes.itemTooltip}>
                  <strong>PowerShell</strong>
                  <p>
                    Automation scripts for environment setup, troubleshooting,
                    and developer productivity.
                  </p>
                  <p>
                    <em>Role:</em> Utility / Automation
                  </p>
                  <p>
                    <em>Proficiency:</em> Intermediate
                  </p>
                </div>
              </div>

              {/* AWS */}
              <div className={classes.item}>
                <span className={classes.itemName}>AWS</span>
                <div className={classes.itemTooltip}>
                  <strong>AWS</strong>
                  <p>
                    Currently working to get my Cloud Practitioner certificate.
                  </p>
                  <p>
                    <em>Role:</em> Cloud Managment and Development
                  </p>
                  <p>
                    <em>Proficiency:</em> Beginner
                  </p>
                </div>
              </div>

              {/* AWS */}
              {/* <div className={classes.item}>
                <span className={classes.itemName}>kubernetes</span>
                <div className={classes.itemTooltip}>
                  <strong>AWS</strong>
                  <p>
                    More information to follow soon
                  </p>
                  <p>
                    <em>Role:</em> Cloud Managment and Development
                  </p>
                  <p>
                    <em>Proficiency:</em> Beginner
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <p className={classes.p}>
          I am a developer an artist and video editor. Feel free to browse around
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
          src={scrollBottom2}
          alt="Scroll Bottom"
          className={classes.scrollImg}
        />
      </div>
    </div>
  );
}

export default HomePage;
