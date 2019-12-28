var diceNumber = function() {
    var randomNumber1 = Math.round((Math.random() * 6) + 1); // random number b/w 1 to 6

    var randomImage1 = "dice" + randomNumber1 + ".png"; //assiging rand num to the image

    var randomSource1 = "images/" + randomImage1; //updating source
    //setting the random image source using DOM
    document.querySelectorAll("img")[0].setAttribute("src", randomSource1);



    var randomNumber2 = Math.round((Math.random() * 6) + 1);

    var randomImage2 = "dice" + randomNumber2 + ".png";

    var randomSource2 = "images/" + randomImage2;

    document.querySelectorAll("img")[1].setAttribute("src", randomSource2);

    //Deciding winner logic and upating winner as the title
    if(randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Hurray....Draw!";
    }else if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "✌️ Player 1 wins!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 wins ✌️!";
    }
};