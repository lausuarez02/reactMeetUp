//component
import Card from "components/ui/Card";
//utils
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler} data-testid='submitTest'>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button data-testid='buttonTest'>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
