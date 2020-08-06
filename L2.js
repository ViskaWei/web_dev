const express = require('express');
const app = express();
const port = 1160;
const server = app.listen(port, listening);

function listening(){
    console.log("server running"); 
    console.log(`running on localhost: {$port}`);
}
