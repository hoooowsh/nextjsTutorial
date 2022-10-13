import TechItem from "./TechItem";
import classes from "./TechList.module.css";

function TechList(props) {
  // console.log(props);
  return (
    <ul className={classes.list}>
      {props.techs.map((tech) => (
        <TechItem
          key={tech.id}
          id={tech.id}
          title={tech.title}
          text={tech.text}
        />
      ))}
    </ul>
  );
}

export default TechList;
