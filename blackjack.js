
//Global variables
var suits = ['H', 'D', 'C', 'S'];
var values = [2,3,4,5,6,7,8,9,10,'J', 'Q', 'K', 'A'];
var deck = [];
var playerHand = [];
var dealerHand = [];
var dealButton = document.getElementById("deal-button");
var player_Deck = document.getElementById("player-deck");
var dealer_Deck = document.getElementById("dealer-deck");

//Build the deck of cards
function buildDeck(){
    for(var a = 0; a < values.length; a++){
        
        for(var b = 0; b < suits.length; b++){

            var card = {Value: values[a], Suit: suits[b], ImgFile: "images/JPEG/" + values[a] + suits[b] + ".jpg"};
            
            if(values[a] == 'J' || values[a] == 'Q' || values[a] == 'K'){
                card.Value = 10;
            }
            if(values[a] == 'A'){
                card.Value = 11;
            }

            deck.push(card);
        }
    }
}




//Shuffle the deck of cards
function shuffle(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp =deck[i];
       deck[i] =deck[j];
       deck[j] = temp;
    }
    return deck;
}




//Get 2 cards from deck for Dealer
function dealerCards(){
    dealerHand.push(deck.pop());
    dealerHand.push(deck.pop());
    var imageCard = "";
    for(var i = 0; i < dealerHand.length; i++){
        imageCard += `<img src="${dealerHand[i].ImgFile}" width = "200px"></img>`;
    }
    return imageCard
}

//Get 2 cards from deck for Player
function playerCards(){
    playerHand.push(deck.pop());
    playerHand.push(deck.pop());
    var imageCard = "";
    for(var i = 0; i < playerHand.length; i++){
        imageCard += `<img src="${playerHand[i].ImgFile}" width = "200px"></img>`;
    }
    return imageCard;
}

//Put 2 cards for Dealer in Dealer's Box
function displayDealerCards(){
    dealer_Deck.innerHTML = dealerCards();
}

//Put 2 cards for Player in Player's Box
function displayPlayerCards(){
    player_Deck.innerHTML = playerCards();
}

//Deal the deck

dealButton.addEventListener("click", (event) => {
    buildDeck();
    //step 2 

    deck = shuffle(deck)
    // shuffle();
    // dealerCards();
    displayDealerCards();
    // playerCards();
    displayPlayerCards();
})      




// function hitMe(){

//     hitButton = addEventListener("click", (event) => {
//         player_Deck.innerHTML = buildDeck();
//     })
// }



// document.getElementById("btnStand").addEventListener("click", function(){
//     //write "Stand" logic here
// });





// var deck = [{suit: value, value: value, imgUrl: value}, {}, {}] //52 objects
// // shuffle
// var player = [{suit, value, imgURL}, {}, {}]; //19

// var dealer = [{}, {}, {}, {}]; // 10, 17, 20

//show them on the html using dom manipulion

// calculation player hand ; add up the cards in the array

// stand, hit

// calculation

// stand

// dealer hand value

// dealer get another card
