import { Fragment } from "react";
import MeetupList from "../../components/add_new_components/MeetupList";
import Layout from "../../components/layout/Layout";

import Link from "next/link";

// this will get a list of tech from backend, each of the tech in the list will have an Id
function TechPage() {
  const DUMMY = [
    {
      id: "M1",
      title: "first",
      image:
        "https://lh3.googleusercontent.com/ztbU9w1aYNWu8agShKYG4b-Aa1eh6CsLXuk59B2s9XuPaslLthiU7v0EoxLHbRAtFb0=w600-rwa",
      address: "some address",
      description: "des",
    },
    {
      id: "M2",
      title: "second",
      image:
        "https://lh3.googleusercontent.com/ztbU9w1aYNWu8agShKYG4b-Aa1eh6CsLXuk59B2s9XuPaslLthiU7v0EoxLHbRAtFb0=w600-rwa",
      address: "some address",
      description: "des",
    },
    {
      id: "M3",
      title: "third",
      image:
        "https://lh3.googleusercontent.com/ztbU9w1aYNWu8agShKYG4b-Aa1eh6CsLXuk59B2s9XuPaslLthiU7v0EoxLHbRAtFb0=w600-rwa",
      address: "some address",
      description: "des",
    },
  ];

  return (
    <Fragment>
      <Layout>
        <MeetupList meetups={DUMMY} />
      </Layout>
    </Fragment>
  );
}

export default TechPage;
