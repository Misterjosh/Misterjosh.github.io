$().ready(function(){
// Display Normal Images
$("#normalButton").on("click", function(){
    console.log("Normal clicked");
    $("#img1").attr("src", "assets/imgs/DayPlanner.png");
    $("#img2").attr("src", "assets/imgs/WeatherApp.png");
    $("#img3").attr("src", "assets/imgs/TranslationApp.png");
})
// Display QR in place of Images
$("#qrButton").on("click", function(){
    console.log("QR clicked");
    $("#img1").attr("src", "assets/imgs/Day-PlannerQR.png");
    $("#img2").attr("src", "assets/imgs/Weather-AppQR.png");
    $("#img3").attr("src", "assets/imgs/Translation-AppQR.png");
})

});