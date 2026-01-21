import { Link, useNavigate } from "react-router-dom";
import classes from "./About.module.css";
import imgMe from "../assets/profilePic1.png";
import imgHumong from "../assets/humongus.jpg";
import imgMoto from "../assets/moto.jpg";
import imgWeber from "../assets/Weber.png";

import scrollTop2 from "../assets/ScrollTop2.png";
import scrollBottom2 from "../assets/ScrollBottom2.png";

function AboutPage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/");
  }

  return (
    <div className={classes.container}>
      <div className={classes.scrollHeader}>
        <img src={scrollTop2} alt="Scroll Top" className={classes.scrollImg} />
      </div>

      <h1 className={classes.h1}>About Me</h1>
      <img src={imgMe} alt="Me" className={classes.img} />
      <p className={classes.p}>
        Hi Im Maitland! A passionate Software engineer with a desire to help
        write clean code. I graduated from Weber State University with my
        Bachlors from Weber State University and am happy to finally be finished
        with school. <br />
      </p>

      <img src={imgWeber} alt="Image" className={classes.img} />
      <p className={classes.p}>
        Since I could remember, I have been using a computer since I could talk.
        During my early childhood I spent time playing Putt-Putt and Pajama Sam.
        I still love these games and often look back at them for inspiration.
      </p>

      <img src={imgHumong} alt="Image" className={classes.img} />
      <br />
      <p className={classes.p}>
        <br />
        I enjoy creative problem-solving, and yes I DO enjoy debugging. In my
        free time, I mountain bike, read books, and 3D Printing. The biggest
        thing I have ever made was a full suit of armor.
        <br />
        <br />
        <img src={imgMoto} alt="Image" className={classes.img} />
        <br />
        <br />
        Though my work journey, I found myself working at Motorola Solutions as
        fullstack software engineer. Most of the work I do does end up being on
        the backend and involves C# and Java. The main product I work on is IBR
        (Incident Base Reporting). I help make sure reporting is up to State
        spec and varys from State to State.
      </p>

      <p>
        <button onClick={navigateHandler} className={classes.button}>
          Go Home
        </button>
      </p>

      <div className={classes.scrollFooter}>
        <img
          src={scrollBottom2}
          alt="Scroll Bottom"
          className={classes.scrollImg}
        />
      </div>
      <span>
        <br />
      </span>
      <span>
        <br />
      </span>
      <span>
        <br />
      </span>
    </div>
  );
}

export default AboutPage;
