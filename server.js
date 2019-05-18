const express = require('express');
const mongoose = require('mongoose');
//ORM to interact with MongoDB database
const bodyParser = require('body-parser');
//take requests and get data from the body
const items = require('./routes/api/items');


const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());


//DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
	.catch(err => console.log(err));

	//use routes
	app.use('/api/items', items)

//if we use Heroku use process.env.PORT
const port = process.env.PORT || 5000;
//npm run server to watch server to use nondemon
app.listen(port,()=> console.log(`server started on port ${port}`))
