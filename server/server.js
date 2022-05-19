const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "authors"

app.use(cors(), express.json(), express.urlencoded({extended:true}));
console.log('Hello... ');

require('./config/mongoose')(DB);
require('./routes/author.routes')(app);

app.listen(PORT, () => console.log(`The server is up on PORT: ${PORT}`));