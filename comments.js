// Create web server
// Create a new web server using the express module.
// Define a route for GET requests to the path /comments.
// The route should read the contents of the file comments.json and return the contents to the client using res.send.
// Finally, listen on port 3000.

// Import the express module
var express = require('express');

// Create a new web server
var app = express();

// Define a route for GET requests to /comments
app.get('/comments', function(req, res) {
    // Read the contents of the file comments.json
    var comments = require('fs').readFileSync('comments.json');
    // Return the contents to the client
    res.send(comments);
});

// Listen on port 3000
app.listen(3000);