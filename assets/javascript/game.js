$(document).ready(function () {

    // create array of 4 characters ================================================================
    var gardener = {
        name: "gardener",
        health: 200,
        strength: 50,
        weakness: 8,
        imageUrl: "../assets/images/gardener.jpg",
        value: 1
    };

    var tomato = {
        name: "tomato",
        health: 100,
        strength: 25,
        weakness: 12,
        imageUrl: "assets/images/tomato.jpg",
        value: 2
    };

    var drought = {
        name: "drought",
        health: 75,
        strength: 100,
        weakness: 50,
        imageUrl: "assets/images/drought.jpg",
        value: 3
    };

    var cloud = {
        name: "cloud",
        health: 75,
        strength: 75,
        weakness: 20,
        imageUrl: "assets/images/clouds.jpg",
        value: 4
    };

    var allCharacters = [gardener, tomato, drought, cloud];

    var isChosenCharacter = false;
    var isChosenEnemy = false;
    var mainCharacter = "";
    var mainEnemy = "";
    var attackResult = "";

    // get links for song (ignore for now)

    // funciton to initialize the game and allows reset ==================================================
    function initializeGame() {

        var gardener = {
            name: "gardener",
            health: "",
            strength: "",
            weakness: "",
            imageUrl: "assets/images/gardener.jpg",
            value: 1
        };

        var tomato = {
            name: "tomato",
            health: "",
            strength: "",
            weakness: "",
            imageUrl: "assets/images/tomato.jpg",
            value: 2
        };

        var drought = {
            name: "drought",
            health: "",
            strength: "",
            weakness: "",
            imageUrl: "assets/images/drought.jpg",
            value: 3
        };

        var cloud = {
            name: "cloud",
            health: "",
            strength: "",
            weakness: "",
            imageUrl: "assets/images/clouds.jpg",
            value: 4
        };
        isChosenCharacter = false;
        isChosenEnemy = false;
        mainCharacter = "";
        mainEnemy = "";
        attackResult = "";

        // empty divs
        $("#gardenerDiv, #tomatoDiv, #droughtDiv, #cloudsDiv").empty();
    };

    // dynamically create characters ======================================================================
    for (var i = 0; i < allCharacters.length; i++) {
        var charButton = $("<div>");
        charButton.text(allCharacters[i].name);
        if (allCharacters[i].name === "gardener") {
            charButton.addClass("col-3 characters gardenerImg");
            charButton.attr("data-letter", allCharacters[i].name);
        }
        if (allCharacters[i].name === "tomato") {
            charButton.addClass("col-3 characters tomatoImg");
            charButton.attr("data-letter", allCharacters[i].name);
        }
        if (allCharacters[i].name === "drought") {
            charButton.addClass("col-3 characters droughtImg");
            charButton.attr("data-letter", allCharacters[i].name);
        }
        if (allCharacters[i].name === "cloud") {
            charButton.addClass("col-3 characters cloudsImg");
            charButton.attr("data-letter", allCharacters[i].name);
        }
        $(".selectionArea").append(charButton);
    }

    // create attack button
    if (isChosenEnemy) {
        var attackBtn = $("<button>");
        attackBtn.text("Attack!");
        $("attack-div").append(attackBtn);
        console.log(attackBtn);
    }

    // (1a) on click function for character ==============================================================
    $(".characters").on("click", function () {
        // make sure character has not been chosen
        if (isChosenCharacter) {
            return false;
        }

        // if character is chosen and enemy isn't,
        // designate this click as the enemy
        if (isChosenEnemy) {
            mainEnemy += $(this).val();
            $("#pickedDef").text(mainEnemy);
        }

        else {
            mainCharacter += $(this).val();
            $("#pickedChar").text(mainCharacter);
        }
    });

    // (1b) on click for enemy ==================================================================
    $("#pickedChar").on("click", function () {
        // check that first character has been selected
        if (!isChosenCharacter || isChosenEnemy) {
            return false;
        }

        // set enemy as chosen, so attack button can write
        isChosenEnemy = true;

        // store value......
        mainEnemy = $(this).val();
        console.log(this);

        // set html of pickedDef to the text of what was clicked
        $("#pickedDef").text($(this).text());

    });

    // (1c) on click, hook up div values to array? ======================================================
    $("#")

    // define where isChosenCharacter is true?
    $(".")

    // end of doc ready code below
});