/** this function generates two random numbers
 *  and assign those randome numbers to two dices
 *  by using DOM, this function change the image as per dices number
 *  and display which player is the winner of this dice game
 */
var diceWinner = function() {

    //Generates random numbers between 1 to 6
    var dice1 = Math.round((Math.random() * 5) + 1);
    var dice2 = Math.round((Math.random() * 5) + 1);

    //by using DOM, Assign images as per dices number
    dice1 === 1 ? document.getElementsByTagName("img")[0].setAttribute("src", "images/dice1.png") : dice1 === 2 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png") : dice1 === 3 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice3.png") : dice1 === 4 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice4.png") : dice1 === 5 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice5.png") : dice1 === 6 ?
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice6.png") : "";

    dice2 === 1 ? document.getElementsByTagName("img")[1].setAttribute("src", "images/dice1.png") : dice2 === 2 ?
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice2.png") : dice2 === 3 ?
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice3.png") : dice2 === 4 ?
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice4.png") : dice2 === 5 ?
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice5.png") : dice2 === 6 ?
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice6.png") : "";

    //show the winner as per highest number
    if(dice1 === dice2) {
        document.getElementsByTagName("h1")[0].textContent = "Hurray!......Draw";
    }else if(dice1 > dice2) {
        document.getElementsByTagName("h1")[0].textContent = "Player 1 is the winner";
    } else {
        document.getElementsByTagName("h1")[0].textContent = "Player 2 is the winner";
    }
};