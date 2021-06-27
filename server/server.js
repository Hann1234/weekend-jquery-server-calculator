// configuring server
const express = require('express');
const app = express();
const port = 5000; 

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log('listening on port', port);
  });
  
