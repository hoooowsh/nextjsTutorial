import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewTechForm.module.css";

function NewTechForm(props) {
  const titleInputRef = useRef();
  //   const imageInputRef = useRef();
  const TextInputRef = useRef();
  //   const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    // const enteredImage = imageInputRef.current.value;
    const enteredText = TextInputRef.current.value;
    // const enteredDescription = descriptionInputRef.current.value;

    const techData = {
      title: enteredTitle,
      //   image: enteredImage,
      text: enteredText,
      //   description: enteredDescription,
    };

    props.onAddTech(techData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Tech Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        {/* <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div> */}
        <div className={classes.control}>
          <label htmlFor="text">text</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={TextInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Tech</button>
        </div>
      </form>
    </Card>
  );
}

export default NewTechForm;
