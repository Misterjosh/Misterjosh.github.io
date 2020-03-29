$().ready(function(){
//Make my contact me email form work properly

//prevent submit button from refreshing the page
$(".submit-btn").on("click", function(event){
    event.preventDefault();
    //make sure button functions
    console.log("submit button clicked");
})

});