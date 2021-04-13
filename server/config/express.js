const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser')
    usersRouter = require("../routes/users");
    cors = require("cors")

//require("dotenv").config();    

var passport = require("passport");
var session = require('express-session');

module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully!");
    })

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());

    //configuring passport
    require('./passport');

    //Passport middleware
    app.use(express.urlencoded({estended:true}));
    app.use(express.json());
    app.use(express.static("public"));
    app.use(require('cookie-parser')());

    app.use(session({
      key: 'user_sid',
      secret: 'session_secret',
      resave: true,
      saveUninitialized: false,
      cookie: {
        expires: 10800000, // 3 hrs
        httpOnly: false
      }
    }));
    
    app.use(passport.initialize());
    app.use(passport.session()); //persistent login sessions


    // add routers
    app.use(cors())
    app.use('/users', usersRouter);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}