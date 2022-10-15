import LeetcodeItem from "./LeetcodeItem";
import classes from "./LeetcodeList.module.css";

function LeetcodeList(props) {
  // console.log(props);
  return (
    <ul className={classes.list}>
      {props.leetcodes.map((leetcode) => (
        <LeetcodeItem
          key={leetcode.id}
          id={leetcode.id}
          problemNum={leetcode.problemNum}
          title={leetcode.title}
          text={leetcode.text}
        />
      ))}
    </ul>
  );
}

export default LeetcodeList;
