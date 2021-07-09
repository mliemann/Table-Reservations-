// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)

var reservations = []
var waitlist= []


// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/api/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

//Create the logic that handles reservation requests. Your code should work such that POST requests take in JSON objects, checks if there is any space left, then adds the JSON object to either the reservation array or the waitlist array. Your POST route should also respond to requests with a confirmation (true or false) of whether or not the requestor has a reservation (or is on the waiting list).

//You should be using Insomnia Core to do all your testing at this point.

// var listselection = ()=> {
//   if (reservations > 5){
  //   app.post('/api/waitlist', (req, res) => {
  //     // req.body hosts is equal to the JSON post sent from the user
  //     // This works because of our body parsing middleware
  //     const newReserve = req.body;
    
  //     // Using a RegEx Pattern to remove spaces from newCharacter
  //     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //     newReserve.routeName = newReserve.name.replace(/\s+/g, '').toLowerCase();
  //     console.log(newReserve);
    
  //     reservations.push(newReserve);
  //     res.json(newReserve);
  // //   });
  // } else{
    app.post('/api/reserve', (req, res) => {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body parsing middleware
      const newReserve = req.body;
    
      // Using a RegEx Pattern to remove spaces from newCharacter
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      newReserve.routeName = newReserve.name.replace(/\s+/g, '').toLowerCase();
      console.log(newReserve);
    
      waitlist.push(newReserve);
      res.json(newReserve);
    });
//   // }
// }




 

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

























