import { Fragment, useEffect, useState } from "react";
import TechList from "../../components/add_new_components/Tech/TechList";
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
function TechPage(props) {
  // const [loadedTechs, setLoadedTechs] = useState([]);
  // useEffect(() => {
  //   // send http request and fetch data
  //   setLoadedTechs(DUMMY);
  // }, []);

  return (
    <Fragment>
      <Layout>
        {/* <TechList techs={loadedTechs} /> */}
        <TechList techs={props.techs} />
      </Layout>
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   // fetch data from an API

//   const req = context.req;
//   const res = context.res;

//   return {
//     props: { techs: DUMMY },
//   };
// }

// data fetching for pre rendering
// like telling net crawler to wait
export async function getStaticProps() {
  // fetch data from API
  return {
    // this props will be pass to TechPage main function
    props: {
      techs: DUMMY,
    },
    revalidate: 86400,
  };
}

export default TechPage;
