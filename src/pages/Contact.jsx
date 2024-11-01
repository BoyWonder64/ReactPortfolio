import useInput from "../hooks/useInput";
import classes from "./Contact.module.css";

const ContactPage = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim().length > 0);

  let formIsValid =
    enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid;

  const formSubmissionHandler = async (event) => {
    console.log("Submission made");
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const contactData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

        console.log("Contact name being sent:", contactData.name);
        console.log("Contact email being sent:", contactData.email);
        console.log("Contact message being sent:", contactData.message);

    try {
      await fetch(
        "https://portfolio-2f6e8-default-rtdb.firebaseio.com/portfolio.json",
        {
          method: "POST",
          body: JSON.stringify(contactData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    //   window.location.reload();
    } catch (error) {
      console.error("Error saving recipe:", error);
    }

    

    resetNameInput();
    resetEmailInput();
    resetMessageInput();
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={formSubmissionHandler}>
        <h1>Contact Me</h1>
        <p>Looking forward to hearing from you.</p>

        <div
          className={`${classes["form-control"]} ${
            nameInputHasError ? classes.invalid : ""
          }`}
        >
          <label htmlFor="name" className={classes.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            className={classes.input}
          />
          {nameInputHasError && (
            <p className={classes["error-text"]}>Please enter your name!</p>
          )}
        </div>

        <div
          className={`${classes["form-control"]} ${
            emailInputHasError ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email" className={classes.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            className={classes.input}
          />
          {emailInputHasError && (
            <p className={classes["error-text"]}>Please enter a valid email</p>
          )}
        </div>

        <div
          className={`${classes["form-control"]} ${
            messageInputHasError ? classes.invalid : ""
          }`}
        >
          <label htmlFor="message" className={classes.label}>
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            value={enteredMessage}
            rows="5"
            className={classes.textarea}
          ></textarea>
          {messageInputHasError && (
            <p className={classes["error-text"]}>Please enter your message</p>
          )}
        </div>

        <div className={classes["form-actions"]}>
          <button className={classes.button}>Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
