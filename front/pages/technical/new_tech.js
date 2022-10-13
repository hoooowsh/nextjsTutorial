// domain.com/technical/new_tech

import React from "react";
import NewTechForm from "../../components/add_new_components/NewTechForm";

function new_tech() {
  function addTechHandler(enteredTechData) {
    console.log(enteredTechData);
  }

  return <NewTechForm onAddTech={addTechHandler} />;
}

export default new_tech;
