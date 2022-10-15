// domain.com/technical/new_leetcode

import React from "react";
import NewLeetcodeForm from "../../components/add_new_components/Leetcode/NewLeetcodeForm";

function new_leetcode() {
  // async means that this function will return with a promise!!

  // this function will be excuted after the return, since its async
  async function addTechHandler(enteredTechData) {
    console.log(enteredTechData);
    const response = await fetch("http://localhost:8000/leetcode", {
      method: "POST",
      body: JSON.stringify(enteredTechData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }
  // this return will be excuted first, then excute addTechHandler async function above
  console.log("before sending request to backend");
  return <NewLeetcodeForm onAddTech={addTechHandler} />;
}

export default new_leetcode;
