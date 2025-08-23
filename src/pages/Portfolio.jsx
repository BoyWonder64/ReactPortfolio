import { Link, useNavigate } from "react-router-dom";
import classes from "./Portfolio.module.css";
import imgBankingApp from "../assets/BankingApp.gif";
import imgHomePage from "../assets/HomePage.png";
import img4InARow from "../assets/4InARow.png";
import imgHangman from "../assets/Hangman.png";
import imgRecipe from "../assets/Recipe.png";

function PortfolioPage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/");
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>My Portfolio</h1>
      <p className={classes.intro}>
        Welcome to my portfolio! Here you can find some of my projects and learn
        more about my skills and experience.
      </p>

      <div className={classes.languages}>
        <div className={classes.column}>
          <h2>Languages I Know</h2>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>C</li>
            <li>C#</li>
            <li>SQL</li>
            <li>Bash</li>
            <li>Perl</li>
            <li>Powershell</li>
            <li>Robot Framework</li>
          </ul>
        </div>
        <div className={classes.column}>
          <h2>Web Technologies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>

        <div className={classes.column}>
          <h2>Misc</h2>
          <ul>
            <li>Azure DevOps</li>
            <li>Maven</li>
            <li>Gradle</li>
            <li>Git</li>
            <li>Linux/Unix Server</li>
            <li>Postman</li>
            <li>Selenium</li>
            <li>Mend</li>
            <li>Grafana</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>SonarQube</li>
            <li>JUnit</li>
            <li>NUnit</li>
          </ul>
        </div>
      </div>

      <section className={classes.projects}>
        <h2 className={classes.h2}>Projects</h2>
        <div className={classes.project}>
          <h3>Banking Application</h3>
          <br />
          <img src={imgBankingApp} alt="Me" className={classes.img} />
          <br />
          <p>
            Written using the MERN Stack A polished site that utilizes Tailwinds
            Using the MERN Stack, Mongo DB was implemented My contributions The
            majority of the backend logic regarding the Admin, Employee, and
            Customer The MongoDB setup and integration The SHA-256 password
            encryption User passwords are stored using SHA-256 hashing Protected
            roles were implemented to allow Admins, Employees, and Customers to
            navigate to their appropriate sites .
          </p>
          <Link to="https://github.com/BoyWonder64/GroupProject3750-BankingAppFrontEnd">
            View Repository
          </Link>
        </div>
        <div className={classes.project}>
          <h3>Portfolio Website</h3>
          <br />
          <img src={imgHomePage} alt="Me" className={classes.img} />
          <br />
          <p>
            This Repo contains all of the react code for this site that I built.
            This was made for an assignment. The only requirements were to have
            the basic pages setup to allow for the user to navigate between
            pages. I performed the logic to allow for the form to actually work.
          </p>
          <Link to="https://github.com/BoyWonder64/ReactPortfolio">
            View Repository
          </Link>
        </div>

        <div className={classes.project}>
          <h3>4 In A Row</h3>
          <br />
          <img src={img4InARow} alt="Me" className={classes.img} />
          <br />
          <p>
            Written using the MERN Stack. The purpose of this project was to
            demonstrate my knowledge and abilities to use react. The largest
            being figuring out how the diagonals. I resolved this by using a
            hard-coded array and then simply checking if each option was in the
            array.
          </p>
          <Link to="https://github.com/BoyWonder64/4InARow">
            View Repository
          </Link>
        </div>

        <div className={classes.project}>
          <h3>Hangman</h3>
          <br />
          <img src={imgHangman} alt="Me" className={classes.img} />
          <br />
          <p>
            Written using the MERN Stack Set Up a basic server using Express to
            handle API requests. My contributions I set up the CSV library The
            guessing logic /guess and /hangman routes The setup for sessions
            that helps select a word from the list
          </p>
          <Link to="https://github.com/BoyWonder64/GroupProject3750-Hangman">
            View Repository
          </Link>
        </div>

        <div className={classes.project}>
          <h3>Recipe</h3>
          <br />
          <img src={imgRecipe} alt="Me" className={classes.img} />
          <br />
          <p>
            Written with Javascript and React. I used a hook to help give user
            feedback. The main requirement for this was to recieve data from a
            user form and then display it. The database is a firebase database.
            The data is saved in a json format and is very simple to work with.
            Overall I really liked this project and was very content with my
            results.
          </p>
          <Link to="https://github.com/BoyWonder64/RecipeApp">
            View Repository
          </Link>
        </div>
      </section>

      <p className={classes.backButton}>
        <button onClick={navigateHandler} className={classes.button}>
          Go Home
        </button>
      </p>
    </div>
  );
}

export default PortfolioPage;
