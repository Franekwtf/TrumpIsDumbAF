"use strict";

var paragraph = document.querySelector("#tweet");
var container = document.querySelector(".container");
var Signature = document.createElement("p");
var button = document.createElement("button");
button.classList.add("btn");
button.innerText = "Another?";
Signature.innerText = "Donald Trump";

function getTweet() {
  fetch("https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "matchilling-tronald-dump-v1.p.rapidapi.com",
      "x-rapidapi-key": "65163a4f47mshfec6773dc7f7a7ep17c28fjsn9d71aeb26140",
      accept: "application/hal+json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return paragraph.innerHTML = response.value;
  }).then(function () {
    return container.appendChild(Signature);
  }).then(function () {
    return container.appendChild(button);
  }).then(function () {
    return button.addEventListener("click", getTweet);
  })["catch"](function (err) {
    console.log(err);
  });
}

getTweet();