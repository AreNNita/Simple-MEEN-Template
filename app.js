// Packages from express-generator
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Start your app with express
var app = express();

// PassportJS initialization
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

// User sessions; This session are stored in the database
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

// MongoDB object modeling tool
var mongoose = require('mongoose');
var userDB = require('./models/userModel');

// Connect to the Database
mongoose.connect('mongodb://localhost:27017/default', {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection

// Router Files used to serve URLs
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `callback` with a user object,
// which will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
  function (username, password, callback) {
    userDB.findOne({
      username: username.toLowerCase()
    }, function (err, user) {
      if (err) {
        return callback(err);
      }
      if (!user) {
        return callback(null, false);
      }
      if (user.password != password) {
        return callback(null, false);
      }
      return callback(null, user);
    });
  }));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function (user, callback) {
  callback(null, user.id);
});

passport.deserializeUser(function (id, callback) {
  userDB.findById(id, function (err, user) {
    if (err) {
      return callback(err);
    }
    callback(null, user);
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(logger('dev'));
app.use(express.json({
  limit: '10mb'
}));
app.use(express.urlencoded({
  limit: '10mb',
  extended: false
}));
app.use(require('body-parser').urlencoded({
  extended: true
}));
app.use(require('morgan')('combined'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '01123581321',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Define routes for login with passport
app.get('/login',
  function (req, res) {
    if (req.user) {
      res.redirect('/');
    } else {
      res.render('login', {
        title: 'Login'
      });
    }
  });

app.post('/login',
  passport.authenticate('local', {
    failureRedirect: '/loginFailure'
  }),
  function (req, res) {
    res.redirect('/');
  });

app.get('/logout',
  function (req, res) {
    req.logout();
    res.redirect('/');
  });

app.get('/loginFailure',
  function (req, res) {
    res.render('loginFailure')
  })

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function (req, res) {
    res.render('profile', {
      user: req.user,
      title: 'My Profile'
    });
  });


// URLs to serve
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;