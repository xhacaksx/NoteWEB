require('dotenv').config();

const express=require('express');
const expressLayouts =require('express-ejs-layouts');
const connectDB=require('./server/config/db')

//session 
// Express-session is a middleware that provides session management capabilities for Express.js applications.
// It allows you to create and manage user sessions, which are essential for maintaining stateful interactions with the client across multiple requests.
// You can use different session stores like connect-mongo to persist session data, or a memory store for development purposes.

// Passport is an authentication middleware for Node.js applications.
// It provides a modular approach to handle different authentication strategies, such as local authentication, social login (using OAuth), and more.
// With Passport, you can easily integrate authentication into your Express.js application without having to write boilerplate code for each authentication provider.
const session =require('express-session');
const passport =require('passport');
const MongoStore = require('connect-mongo');

const app=express();
const port=5000 || process.env.PORT;


app.use(passport.initialize());
//app.use(passport.session);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//DB
connectDB();
//static files

app.use(express.static('public'));

//Templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

// Routes

app.use('/',require('./server/routes/auth'));
app.use('/',require('./server/routes/index'));
app.use('/',require('./server/routes/dashboard'));

//handle 404

app.get('*',function(req,res){
    res.status(404).send('404 Page not found');
})
app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});

