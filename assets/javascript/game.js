
$(document).ready(function(){
        var wins = 0;
        var losses = 0;
        var totalScore = 0;
        var computerGuess = Math.floor(Math.random() * 100) + 100;
        console.log(computerGuess);
        // $(".crystals").on("click", function() {
        //     console.log("it works");
        // });
// start of functions
        $("#redCrystal").click(function() {
        console.log("its working!");
        });
        $("#blueCrystal").click(function() {
        console.log("its working!!");
        });
        $("#yellowCrystal").click(function() {
        console.log("its working!!!");
        });
        $("#greenCrystal").click(function() {
        console.log("its working!!!!");
        });
}
)