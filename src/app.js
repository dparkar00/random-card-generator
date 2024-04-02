/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var suit = ["♥", "♠", "♣", "♦"];
  var numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var randomSuit = suit[Math.floor(Math.random() * suit.length)];
  var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  document.querySelector(".top-icon").innerHTML = randomSuit;
  document.querySelector(".card-content").innerHTML = randomNumber;
  document.querySelector(".bottom-icon").innerHTML = randomSuit;

  if (randomSuit == "♥" || randomSuit == "♦") {
    document.querySelector(".card").style.color = "red";
  } else if (randomSuit == "♠" || randomSuit == "♣") {
    document.querySelector(".card").style.color = "black";
  }
};
