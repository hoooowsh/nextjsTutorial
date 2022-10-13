// domain.com/leetcode/new_leetcode

import React from "react";
import NewLeetcodeForm from "../../components/add_new_components/NewLeetcodeForm";

function new_leetcode() {
  function addLeetcodeHandler(enteredLeetcodeData) {
    console.log(enteredLeetcodeData);
  }

  return <NewLeetcodeForm onAddLeetcode={addLeetcodeHandler} />;
}

export default new_leetcode;
