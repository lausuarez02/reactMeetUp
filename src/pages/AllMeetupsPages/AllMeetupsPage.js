//components
import MeetupItem from "components/meetups/MeetupItem/MeetupItem";
//utils
import classes from "components/meetups/MeetupList.module.css";


export default function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        <MeetupItem />
      </ul>
    </section>
  );
}
