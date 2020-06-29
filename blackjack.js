//in your JS file, add the following code.  This code "listens" for the user to click the button, and then executes the //code inside the code block.  Note that the listenter takes as arguments, the event, and and annonymous function.  

function dealDeck(){

    var dealButton = document.getElementById("#deal-button");
    var player_Deck = document.getElementById("#player-deck");
    var dealer_Deck = document.getElementsById("#dealer-deck");

    dealButton.addEventListener("click", (event) => {
        console.log("hello");
        dealer_Deck.innerHTML = <img src="images/JPEG/2C.jpg" alt=""></img>;
        dealer_Deck.innerHTML = <img src="images/JPEG/2S.jpg" alt=""></img>;
        player_Deck.innerHTML = <img src="images/JPEG/JS.jpg" alt=""></img>;
        player_Deck.innerHTML = <img src="images/JPEG/KH.jpg" alt=""></img>;
    else
        dealer_Deck.innerHTML = '';
        player_Deck.innerHTML = '';
        // console.log("bye");
    })
}




// document.getElementById("btnHit").addEventListener("click", function(){
//     //write "hit" logic here
// });

// document.getElementById("btnStand").addEventListener("click", function(){
//     //write "Stand" logic here
// });

// /**
//  * Randomize array element order in-place.
//  * Using Durstenfeld shuffle algorithm.
//  */

// // function shuffleArray(array) {
// //     for (var i = array.length - 1; i > 0; i--) {
// //         var j = Math.floor(Math.random() * (i + 1));
// //         var temp = array[i];
// //         array[i] = array[j];
// //         array[j] = temp;
// //     }
// //     return array;
// // }

// //Deck of cards
// var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
// var values = [2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King', 'Ace'];
// var deck = [];



// function buildDeck(){


// }