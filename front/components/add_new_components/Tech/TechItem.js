import Card from "../../ui/Card";
import classes from "./TechItem.module.css";
import { useRouter } from "next/router";

function TechItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/technical/" + props.id);
  }
  
  return (
    <li className={classes.item}>
      <Card>
        {/* <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div> */}
        <div className={classes.content}>
          <h3>{props.title}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default TechItem;
