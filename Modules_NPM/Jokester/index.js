const jokes = require("give-me-a-joke");
// console.dir(jokes)
const colors = require("colors");
const cowsay = require("cowsay");

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});