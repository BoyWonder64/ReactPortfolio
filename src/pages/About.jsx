import { Link, useNavigate } from "react-router-dom";
import classes from "./About.module.css";
import imgMe from "../../src/assets/PROFILEPIC.png";
import imgHumong from "../../src/assets/humongus.jpg";
import imgMoto from "../../src/assets/moto.jpg";
import imgWeber from "../../src/assets/Weber.png";

function AboutPage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/");
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>About Me</h1>
      <img src={imgMe} alt="Me" className={classes.img} />
      <p className={classes.p}>
        Hi Im Maitland! I am finished up at Weber State University with my
        Bachlors from Weber State University. I already got my Assocaites from
        SLCC and am finally be finished with school. <br />
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
        I enjoy creative problem-solving, and yes I do enjoy debugging. In my
        free time, I listen to mountain bike, read books, and 3D Printing. The biggest
        thing I have ever made was a full suit of armor.
        <br />
        <br />
        <img src={imgMoto} alt="Image" className={classes.img} />
        <br />
        <br />I now work for a company called Motorola Solutions as a software
        engineer. I currently work on the IBR team. I mostly code in Java and C++. A project I am
        most proud of is the ASP.NET Azure Cloud we built to improve downtime and validation.
      </p>

      <p>
        <button onClick={navigateHandler} className={classes.button}>
          Go Home
        </button>
      </p>
    </div>
  );
}

export default AboutPage;
