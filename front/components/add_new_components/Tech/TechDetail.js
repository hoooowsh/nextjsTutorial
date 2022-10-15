import classes from "./TechDetail.module.css";

function TechDeatil(props) {
  return (
    <section className={classes.detail}>
      <h1> first tech </h1>
      <h2> {props.title} </h2>
      <p> some text </p>
    </section>
  );
}
export default TechDeatil;
