$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
  // This function does an API call to delete event
  $(".unjoin-event").on("click", function() {
    const id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/unjoin-event/" + id
    }).then(() => {
      window.location.replace("/members");
    });
  });
});
