// domain.com/technical/new_tech

import React from "react";
import NewTechForm from "../../components/add_new_components/Tech/NewTechForm";

function new_tech() {
  async function addTechHandler(enteredTechData) {
    // console.log(enteredTechData);
    const response = await fetch("http://localhost:8000/technical", {
      method: "POST",
      body: JSON.stringify(enteredTechData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    // console.log(data);
  }

  return <NewTechForm onAddTech={addTechHandler} />;
}

export default new_tech;
