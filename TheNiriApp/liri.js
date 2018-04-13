

require("dotenv").config(); // this must run first to work. 
const keys = require("./keys.js");
//I need it = require. 

const Twitter = require('twitter');
const request = require("request");
const Spotify = require("node-spotify-api");
const omdbApi = require("omdb-client");
// install the "green" in nmp install to have the packege. Then require will trace the package. 


const fs = require("fs");
// fs lets me write/read into files. 


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
// new twitter constructer. KEYS.twitter. New twitter object. 






//twitter for Node. 
//{} inside here is an object.
// screen_name is the parameter.  
function getMyTweets()  {

var params = { screen_name: 'nodejs' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        // it's true that the sky is not pink. 
        //for (let i = 0; i < 20; i++) {
        //console.log("test1")
// add for loop to give 20 tweets. 
        // }
        
        console.log(tweets[0].user.name);
        console.log(tweets[0].text);
    }
});
}





function getMyMusic(search) {

// now function for Spotify. [copy past function] 
spotify.search({ type: 'track', query: search }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
console.log(data.tracks.items[0].artists[0].name);
console.log(data.tracks.items[0].artists[0].type);
console.log(data.tracks.items[0].artists[0].uri);
console.log(data.tracks.items[0].name);
console.log(data.tracks.items[0].album.name);
// console.log(data.available_markets)
// console.log(data.release_date)
// console.log(data.artist)
// console.log(data.popularity)
// console.log(data.track_number)

  });
}

// Artist(s)
// // The song's name
// A preview link of the song from Spotify
// The album that the song is from

  //omdbApi server side // the function. 
 //search goes in the parameter to be able to search on the 3rd types thing on node. 
 function getMyMovies(search) {
  var params = {
      apiKey: 'trilogy',
      title: search
      //search is a variable,went from green to red. 
      
  }
  omdbApi.get(params, function(err, data) {
//search in blue gets multiple movies. 
//get just gets one movie instead. You want one movie to show up in node, then change search to GET. 


      // process response...
console.log(data.Title)
console.log(data.Year)
console.log(data.Rated)
console.log(data.imdbRating)
console.log(data.Country)
console.log(data.Language)
console.log(data.Genre)
console.log(data.Actors)

  });
 }



var command = process.argv[2];
search = process.argv[3];




 switch (command) {
 case "my-tweets":
 getMyTweets();
 break;
 
 case "my-music":
 getMyMusic(search);
 break;
 
 case "my-movies":
 getMyMovies(search);
 break;
 }
 



//}