$(document).ready(() => {
  const newEntry = {};
  const allEvents = [];
  const user = "";

  // Initial code from Passport, taken from ./members.js
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  // Puts new event data into allEvents array
  $("#create-event").click(event => {
    event.preventDefault();
    newEntry.eventName = $("#event-input")
      .val()
      .trim();
    newEntry.eventDescription = $("#event-description")
      .val()
      .trim();
    newEntry.eventLocation = $("#event-location")
      .val()
      .trim();
    newEntry.eventDate = $("#event-date")
      .val()
      .trim();
    newEntry.eventStartTime = $("#event-start")
      .val()
      .trim();
    newEntry.eventEndTime = $("#event-end")
      .val()
      .trim();

    allEvents.push(newEntry);
    createEvent(newEntry);
  });

  // Delets selected event
  $("#delete-event").click(() => {
    deleteEvent(id);
  });

  // Edits selected event
  $("#edit-event").click(() => {
    editEvent(entry);
  });

  // Allows user to join event
  $("#join-event").click(() => {
    joinEvent(user);
  });

  // AJAX CALLS -------------------------------------------------
  // This function gets all events
  function getEvents() {
    $.ajax({
      method: "GET",
      url: "/api/events"
    }).then(() => {
      // put response in object
      // does this code need to display the info with html?
    });
  }

  // This function does an API call to delete event
  function deleteEvent(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/events/" + id
    }).then(() => {
      getEvents();
    });
  }

  // This function does an API call to update an event
  function editEvent(entry) {
    $.ajax({
      method: "PUT",
      url: "/api/events/" + entry.id,
      data: entry
    }).then(() => {
      getEvents();
    });
  }

  // This function does an API call to create an event
  function createEvent(newEvent) {
    $.ajax({
      method: "POST",
      url: "/api/create-event",
      data: newEvent
    }).then(() => {
      getEvents();
    });
  }
  //-------------------------------------------------------------

  // This function adds user to the event
  function joinEvent() {
    //code to add user to event
  }
});
