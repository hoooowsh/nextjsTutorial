import TechDetail from "../../components/add_new_components/TechDetail";

function TechDetails() {
  // console.log("wtf");
  // return (
  // );

  return <TechDetail id="id" title="this is title" text="thisis text" />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          techId: "M1",
        },
      },
      {
        params: {
          techId: "M2",
        },
      },
      {
        params: {
          techId: "M3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data from a single tech
  const techId = context.params.techId;
  console.log(techId);
  return {
    props: {
      tech: {
        id: techId,
        title: "this is title ahaha ",
        text: " this is  text aaaaa",
      },
    },
  };
}

export default TechDetails;
