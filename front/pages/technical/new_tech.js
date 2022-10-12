// domain.com/technical/new_tech

import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function new_tech() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default new_tech;
