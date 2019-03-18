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
        mainCharacter = 0; // ================================================================ < change back to ""
        mainEnemy = 0;
        attackResult = "";

        // empty divs
        $("#gardenerDiv, #tomatoDiv, #droughtDiv, #cloudsDiv").empty();
    };

    // dynamically create characters ======================================================================
    // cannot get this to hook up 
    for (var i = 0; i < allCharacters.length; i++) {
        var charButton = $("<button>");
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

    // can't figure out how to mark the clicked character buttons
    // as isChosenCharacter or isChosenEnemy


    // (1a) on click function for character ==============================================================
    $(".characters").on("click", function () {
        // make sure character has not been chosen
        if (isChosenCharacter || isChosenEnemy) {
            return false;
        }

        // if character is chosen and enemy isn't,
        // designate this click as the enemy
        if (isChosenEnemy) {
            mainEnemy += $(this).val();
            $("#pickedDef").text($(this).val());
        }

        else {
            mainCharacter += $(this).val();
            isChosenCharacter = true;
            $("#pickedChar").text($(mainCharacter).text());
            console.log(mainCharacter);
        }
    });

    // (1b) on click for enemy ==================================================================
    $(".characters").on("click", function () {
        // check that first character has been selected
        if (!isChosenCharacter) {
            return false;
        }

        // set enemy as chosen, so attack button can write
        isChosenEnemy = true;

        // store value......
        mainEnemy = $(this).val();

        // set html of pickedDef to the text of what was clicked
        $("#pickedDef").text($(this).text());
    });

    // create attack button
    if (isChosenEnemy) {
        var attackBtn = $("<button>");
        attackBtn.text("Attack!");
        $("attack-div").append(attackBtn);
        console.log(attackBtn);
    }

    // (1c) on click, hook up div values to array? ======================================================
    $(".equal").on("click", function () {

        // If we already clicked equal, don't do the calculation again
        if (isCalculated) {
            return false;
        }

        // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
        isCalculated = true;

        // Use parseInt to convert our string representation of numbers into actual integers
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        // Based on the operator that was chosen.
        // Then run the operation and set the HTML of the result of that operation
        if (operator === "plus") {
            result = firstNumber + secondNumber;
        }

        else if (operator === "minus") {
            result = firstNumber - secondNumber;
        }

        else if (operator === "times") {
            result = firstNumber * secondNumber;
        }

        else if (operator === "divide") {
            result = firstNumber / secondNumber;
        }

        else if (operator === "power") {
            result = Math.pow(firstNumber, secondNumber);
        }

        $("#result").text(result);

    });


    // define where isChosenCharacter is true?
    $(".")

    // end of doc ready code below
});