//on ready
$(document).ready(function () {

    //Save buttton functionality
    $('.saveBtn').on("click", function () {

        //get values from the div containing save button
        //the save button's sibling's (with the class description) value (the text you input)
        var value = $(this).siblings(".description").val();
        //the save button's parent's attribute (the value of the id)
        var time = $(this).parent().attr("id");
        
        //saves(sets) to localStorage as
        localStorage.setItem(time, value);
    })

    //Hour updater functionality
    function hourUpdater() {
        var currentHour = moment().hours();
        clearInterval(timeInt);
        //looping over time blocks. 
        $('.time-block').each(function () {
            //The .split("-")[1] takes the 2nd value from the array it makes, from the string acquired, from the id value of everything with the class time-block. It splits "hour-9" into ['hour', '9']. The 9 is parsed back into a number with parseInt.
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            //check to see if we have passed this time. If so add the class past.
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            //if not, check if it is the current time. If it is, make sure the class past is removed and add the present class.
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            //if it isn't either of those, make sure the past and present classes are not there anymore and add the future class.
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    //set up interval to see if time needs updated. Every 15 seconds it runs hour updater.
    var timeInt = setInterval(hourUpdater, 15000);
    
    //Calling hour updater
    hourUpdater();


    //loading local storage saved. At the id #hour-whatever" the class ".description" is filled with the value at 'hour-whatever' from local storage.
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));


    //Displaying current day on page
    $("#currentDay").text(moment().format("dddd, MMMM, Do"));

    //I added the local time borrowing this code from w3schools setInterval example. Calls myTimer every second to update the time. I left the variable off because I don't want to clear the time.
    setInterval(myTimer, 1000);

    function myTimer() {
      var d = new Date();
      var t = d.toLocaleTimeString();
      document.getElementById("timeofday").innerHTML = t;  
    }
});