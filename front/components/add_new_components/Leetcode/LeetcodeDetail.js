import classes from "./LeetcodeDetail.module.css";

function LeetcodeDetail(props) {
  console.log(props);
  return (
    <section className={classes.detail}>
      <h1> first tech </h1>
      <h2> {props.title} </h2>
      <h2> {props.problemID} </h2>
      <p> some text </p>
    </section>
  );
}
export default LeetcodeDetail;
