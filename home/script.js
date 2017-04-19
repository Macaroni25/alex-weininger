

// game object

function Game(title, description, link, thumbnail) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.thumbnail = thumbnail;
}
var games = new Array;

games[0] = new Game("Super Mario Bros", "a classic mario game", "mario.html", "images/mario.png");

function addGame() {
    games[games.length] = new Game(document.getElementById("title").value.toString(), document.getElementById("description").value.toString(), document.getElementById("link").value.toString(), "...");
    printGames();
}
function printGames() {
    for (var i = 0; i < games.length; i++) {
        console.log(games[i].title + " " + games[i].description + " " + games[i].link);
        document.getElementById("gamelist").innerHTML += "<br>" + games[i].title + " " + games[i].description + " " + games[i].link;
    }
}

