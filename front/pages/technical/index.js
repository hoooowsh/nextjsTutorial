import { Fragment, useEffect, useState } from "react";
import TechList from "../../components/add_new_components/TechList";
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
function TechPage() {
  const [loadedTechs, setLoadedTechs] = useState([]);
  useEffect(() => {
    // send http request and fetch data
    setLoadedTechs(DUMMY);
  }, []);

  return (
    <Fragment>
      <Layout>
        <TechList techs={loadedTechs} />
      </Layout>
    </Fragment>
  );
}

export default TechPage;
