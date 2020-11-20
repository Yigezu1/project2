$(document).ready(function () {
    var newEntry = {};
    var allEvents = [];
    var user;

    // Initial code from Passport, taken from ./members.js
    $.get("/api/user_data").then(data => {
        $(".member-name").text(data.email);
    });

    // Puts new event data into allEvents array
    $("#create-evnet").onclick(function () {
        newEntry.eventName = $("#event-name").value().trim();
        newEntry.eventDescription = $("#description").value().trim();
        newEntry.eventLocation = $("#location").value().trim();
        newEntry.eventDate = $("#date").value().trim();
        newEntry.eventStartTime = $("#start-time").value().trim();
        newEntry.eventEndTime = $("#end-time").value().trim();

        allEvents.push(newEntry);
    });

    // Delets selected event
    $("#delete-event").onclick(function () {
        deleteEvent(id);
    })

    // Edits selected event
    $("#edit-event").onclick(function () {
        editEvent(entry);
    })

    // Allows user to join event
    $("#join-event").onclick(function () {
        joinEvent(user);
    })

    // AJAX CALLS -------------------------------------------------
    // This function gets all events
    function getEvents() {
        $.ajax({
            method: "GET",
            url: "/api/events"
        })
            .then(function () {
                // put response in object 
                // does this code need to display the info with html?

            });
    }

    // This function does an API call to delete event
    function deleteEvent(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/events/" + id
        })
            .then(function () {
                getEvents();
            });
    }

    // This function does an API call to update an event
    function editEvent(entry) {
        $.ajax({
            method: "PUT",
            url: "/api/events/" + entry.id,
            data: entry
        })
            .then(function () {
                getEvents();
            });
    }

    // This function does an API call to create an event
    function createEvent(newEvent) {
        $.ajax({
            method: "POST",
            url: "/api/events/",
            data: newEvent
        })
            .then(function () {
                getEvents();
            });
    }
    //-------------------------------------------------------------


    // This function adds user to the event
    function joinEvent(user) {

        //code to add user to event
    }











})