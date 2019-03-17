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

    var clouds = {
        name: "clouds",
        health: 75,
        strength: 75,
        weakness: 20,
        imageUrl: "assets/images/clouds.jpg",
        value: 4
    };

    var allCharacters = [gardener, tomato, drought, clouds];

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

        var clouds = {
            name: "clouds",
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

    // dynamically create characters ========================== NOT WORKING YET ========================================
    for (var i = 0; i < allCharacters.length; i++) {
        var charButton = $("<button>");
        charButton.text(allCharacters[i].name);
        if (allCharacters[i].name === "gardener") {
            charButton.addClass("gardenerImg");
        }
        if (allCharacters[i].name === "tomato") {
            charButton.addClass("tomatoImg");
        }
        if (allCharacters[i].name === "drought") {
            charButton.addClass("droughtImg");
        }
        if (allCharacters[i].name === "clouds") {
            charButton.addClass("cloudsImg");
        }
        $(".selectionArea").append(charButton);
        console.log(charButton);
    }



    // (1a) on click function for character ==============================================================
    $(".selectionArea").on("click", function () {
        // make sure character has not been chosen
        if (isChosenCharacter) {
            alert("test");
        }

        // if character is chosen and enemy isn't,
        // designate this click as the enemy
        if (isChosenEnemy) {
            mainEnemy += $(this).val();
            $("#pickedDef").text(mainEnemy);
        }

        else {
            mainCharacter = isChosenCharacter + $(this).val();
            $("#pickedChar").text(mainCharacter);
            console.log(mainCharacter);
        }
    });

    // (1b) on click for attack button ==================================================================
    $("#pick-char").on("click", function () {
        if (!isChosenCharacter || isChosenEnemy) {
            return false;
        }

        isChosenCharacter = true;

        // need to store the health value of character,
        // but this doesn't look correct yet....
        mainCharacter = $(this).val();
        $("#pick-char").text($(this).text());

    });

    // (1c) on click, hook up div values to array? ======================================================
    // define where isChosenCharacter is true?
    $(".")

    // end of doc ready code below
});