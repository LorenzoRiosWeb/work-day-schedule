// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // Event listener function that when you click on saveBtn that will save the event coming up.
    $(document).ready(function(){
      // add saveBtn event listener
      $(".saveBtn").on('click', function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // save in local storage
        localStorage.setItem(time,text);
      })
    })



    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    function timeTracker (){
      // tracker for current hour in dayjs.
      var timeNow = dayjs().hour();
      // loop that goes over time blocks
      $("#time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // .each itrates over the DOM elements that are part of the jquery objects.
        // https://api.jquery.com/each/
        // will check if blockTime is equal, less, or greater than timeNow
        if(blockTime < timeNow){
          $(this).removeClass("future")
          $(this).removeClass("present")
          $(this).addClass("past")
        } else if(blockTime === timeNow){
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        } else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");

        }
        
      })

    }
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    // will get items from the local storage if there are any to retrive
    $("#hour8  .description").val(localStorage.getItem("hour8"));
    $("#hour9  .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    
    timeTracker();

    // TODO: Add code to display the current date in the header of the page.
    $("#currentDay").text(dayjs().format("dddd, MMMM DD"));
  });

  