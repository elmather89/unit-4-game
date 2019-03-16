$(document).ready(function () {
    // create variables for 4 characters's health
    var gardenerHealth = 100;
    var tomatoHealth = 100;
    var droughtHealth = 100;
    var cloudsHealth = 100;

    // create images
    var gardenerImg = $("#gardenerImg");
    var tomatoImg = $("#tomato");
    var droughtImg = $("#drought");
    var cloudsImg = $("#clouds");

    // get links for song (ignore for now)

    // ask user to choose a character in pick-char div
    function charPick() {
        $("#pick-char").append("<h2>Choose your character!</h2>");
    };
    charPick();

    // on click event
    var counter = 0;
    function gardenerFunc() {
        $(".gardenerImg").one("click", function () {
            counter++;
            if (counter === 1)
            $("#yourHealth").append("<p>" + gardenerHealth + "</p>");
        });
    };
    gardenerFunc();


    // move to pickedChar div
    $(".gardenerImg").click(function () {
        $(".gardenerImg").appendTo("#pickedChar");
        // $(this).hide(); // Hide gardenerImg
    });

    // show remaining health in pickedChar div

    // ask user to pick an enemy
    // show remaing health in pickedDef div

    // move to picked enemyDiv

    // move remaining characters to remainingChar div

    // generate an attach button that shows up in first div AFTER all characters are moved

    // 



    //code goes above
})