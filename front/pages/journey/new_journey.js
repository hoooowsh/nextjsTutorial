// domain.com/journey/new_journey

import React from "react";
import NewJourneyForm from "../../components/add_new_components/Journey/NewJourneyForm";

function new_journey() {
  function addJourneyHandler(enteredJourneyData) {
    console.log(enteredJourneyData);
  }

  return <NewJourneyForm onAddJourney={addJourneyHandler} />;
}

export default new_journey;
