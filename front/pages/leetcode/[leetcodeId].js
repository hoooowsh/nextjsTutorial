import LeetcodeDetail from "../../components/add_new_components/Leetcode/LeetcodeDetail";

function LeetcodeDetails() {
  // console.log("wtf");
  // return (
  // );

  return (
    <LeetcodeDetail
      id="id"
      problemID="1"
      title="this is title"
      text="thisis text"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          leetcodeId: "M1",
        },
      },
      {
        params: {
          leetcodeId: "M2",
        },
      },
      {
        params: {
          leetcodeId: "M3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data from a single tech
  const leetcodeId = context.params.leetcodeId;
  console.log(leetcodeId);
  return {
    props: {
      leetcode: {
        id: leetcodeId,
        problemNum: "this is num",
        title: "this is title leet ",
        text: " this is  text leet",
      },
    },
  };
}

export default LeetcodeDetails;
