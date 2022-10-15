import { Fragment } from "react";
import LeetcodeList from "../../components/add_new_components/Leetcode/LeetcodeList";
import Layout from "../../components/layout/Layout";
import Link from "next/link";

const DUMMY = [
  {
    id: "M1",
    title: "first",
    text: "des",
  },
  {
    id: "M2",
    title: "second",
    text: "des",
  },
  {
    id: "M3",
    title: "third",
    text: "des",
  },
];

// this will get a list of tech from backend, each of the tech in the list will have an Id
function LeetcodePage(props) {
  // const [loadedTechs, setLoadedTechs] = useState([]);
  // useEffect(() => {
  //   // send http request and fetch data
  //   setLoadedTechs(DUMMY);
  // }, []);

  return (
    <Fragment>
      <Layout>
        {/* <TechList techs={loadedTechs} /> */}
        <LeetcodeList leetcodes={props.leetcodes} />
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from API
  return {
    // this props will be pass to TechPage main function
    props: {
      leetcodes: DUMMY,
    },
    revalidate: 86400,
  };
}

export default LeetcodePage;
