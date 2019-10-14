
$(document).ready(function(){
        var wins = 0;
        var losses = 0;
        var totalScore = 0;
        
        var computerGuess = Math.floor(Math.random() * 101) + 19;
        // console.log(computerGuess);

        // start of functions
        function randomINT () {
                return Math.floor(Math.random() * 11) + 1;
        }

        function checkWinOrLoss () {
                if (totalScore == computerGuess) {
                        wins = wins + 1;
                        $("#wins-Text").html(wins);
                        $("#winOrLoss-Text").html("You win!!!");
                        computerGuess = Math.floor(Math.random() * 101) + 19;
                        $("#randomNumber-Text").html(computerGuess);
                        totalScore = 0;
                }
                if (totalScore > computerGuess) {
                        losses = losses + 1;
                        $("#losses-Text").html(losses);
                        $("#winOrLoss-Text").html("You lose!!!");
                        computerGuess = Math.floor(Math.random() * 101) + 19;
                        $("#randomNumber-Text").html(computerGuess);
                        totalScore = 0;
                }
        }

        var redCrystal = randomINT();
        var blueCrystal = randomINT();
        var yellowCrystal = randomINT();
        var greenCrystal = randomINT();

        $("#redCrystal").click(function() {
                totalScore = redCrystal + totalScore;
                $("#yourTotalScore-Text").html(totalScore);
                checkWinOrLoss();
        });

        $("#blueCrystal").click(function() {
                totalScore = blueCrystal + totalScore;
                $("#yourTotalScore-Text").html(totalScore);
                checkWinOrLoss();
        });

        $("#yellowCrystal").click(function() {
                totalScore = yellowCrystal + totalScore;
                $("#yourTotalScore-Text").html(totalScore);
                checkWinOrLoss();
        });

        $("#greenCrystal").click(function() {
                totalScore = greenCrystal + totalScore;
                $("#yourTotalScore-Text").html(totalScore);
                checkWinOrLoss();
        });

        $("#randomNumber-Text").html(computerGuess);

}
)