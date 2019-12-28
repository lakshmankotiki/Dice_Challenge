var diceWinner = function() {
    var dice1 = Math.round((Math.random() * 5) + 1);
    var dice2 = Math.round((Math.random() * 5) + 1);
    console.log("document is ", document);
    console.log("dice1 is ", dice1);
    console.log("dice2 is", dice2);
    // if(dice1 === dice2) {
    //     document.getElementsByTagName("h1")[0].textContent = "draw";
    // } else if(dice1 === 1 || dice2 === 1){
    //     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice1.png");
    //     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice1.png");
    // } else if(dice1 === 2 || dice2 === 2){
    //     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png");
    //     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice2.png");
    // } else if(dice1 === 3 || dice2 === 3){
    //     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice3.png");
    //     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice3.png");
    // } else if(dice1 === 4 || dice2 === 4){
    //     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice4.png");
    //     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice4.png");
    // } else if(dice1 === 5 || dice2 === 5){
    //     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice5.png");
    //     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice5.png");
    // } else if(dice1 === 6 || dice2 === 6){
    //     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice6.png");
    //     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice6.png");
    // }

    dice1 === 1 ? document.getElementsByTagName("img")[0].setAttribute("src", "images/dice1.png") : dice1 === 2 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png") : dice1 === 3 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice3.png") : dice1 === 4 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice4.png") : dice1 === 5 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice5.png") : dice1 === 6 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice6.png") : "";

    dice2 === 1 ? document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png") : dice2 === 2 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png") : dice2 === 3 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice3.png") : dice2 === 4 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice4.png") : dice2 === 5 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice5.png") : dice2 === 6 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice6.png") : "";

    if(dice1 === dice2) {
        document.getElementsByTagName("h1")[0].textContent = "Draw.";
    }else if(dice1 > dice2) {
        document.getElementsByTagName("h1")[0].textContent = "Player 1 is the winner";
    } else {
        document.getElementsByTagName("h1")[0].textContent = "Player 2 is the winner";
    }
};