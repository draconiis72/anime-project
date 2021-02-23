require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");


require("./config/mongoose.config"),(process.env.DB_NAME);

const app = express();

app.use(cookieParser());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./routes/user.routes')(app);
require('./routes/animeMovies.route')(app);
require('./routes/members.route')(app);

app.listen (process.env.DB_PORT, () => 
console.log ('Listen port ' + process.env.DB_PORT)
);
