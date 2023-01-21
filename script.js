const { Connection } = require('@solana/web3.js');

const connection = new Connection('https://testnet.solana.com');
const connectWalletButton = document.getElementById("connectWallet");
const walletAddressInput = document.getElementById("walletAddress");

connectWalletButton.addEventListener("click", function(event) {
  event.preventDefault();

  if (!walletAddressInput.value) {
    alert("Please enter a valid Phantom Wallet address.");
    return;
  }

  // Connect to the user's Phantom Wallet here
});

const flipCoinButton = document.getElementById("flipCoin");

flipCoinButton.addEventListener("click", function() {
  // Implement the coin flip logic here

  // Use the Solana JavaScript library to transfer Solana between the user's
  // phantom wallet and your wallet, depending on the outcome of the coin flip
});
const userPhantomWalletAddress = walletAddressInput.value;
const yourWalletAddress = 2B6Tw2qe3LqaCAzd1HkoGNaHswRTZmbTgMG8C3qfM4J3;
const amount = 10; // amount of Solana to transfer

connection.sendTransaction(userPhantomWalletAddress, yourWalletAddress, amount)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
const flipCoinButton = document.getElementById("flipCoin");
flipCoinButton.addEventListener("click", function() {
    // Implement the coin flip logic here
    if (outcome === 'heads') {
        // Do nothing 
    }else {
        connection.sendTransaction(userPhantomWalletAddress, yourWalletAddress, amount)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
    }
});
function flipCoin() {
    let outcome;
    // Generate a random number between 0 and 1
    let randomNumber = Math.random();
    // Set the threshold value to 0.5
    let threshold = 0.5;
    if (randomNumber > threshold) {
        outcome = 'heads';
    } else {
        outcome = 'tails';
    }
    return outcome;
}
const flipCoinButton = document.getElementById("flipCoin");
flipCoinButton.addEventListener("click", function() {
    let outcome = flipCoin();
    // Do something with the outcome
    console.log(outcome);
});
const placeBetButton = document.getElementById("placeBet");
const betAmountInput = document.getElementById("betAmount");
placeBetButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (!walletAddressInput.value) {
    alert("Please connect your Phantom Wallet before placing a bet.");
    return;
  }
  if (betAmountInput.value <= 0) {
    alert("Please enter a valid bet amount.");
    return;
  }
  // Place the bet and transfer the Solana to the contract
});
