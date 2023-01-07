import classes from "./MeetupDetail.module.css";

function MeetupDetails(props) {
  return (
    <Fragment>
      <img src={props.image} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </Fragment>
  );
}
export default MeetupDetails;
