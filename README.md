# Simple MEEN Template

A Mongo-Express-EJS-Node Template to make a quick Model-View-Controller (MVC) app.

This repository is intended to be easy to understand by beginners coders.

## Description

This project is a starting point for simple web apps, that use MVC as software design pattern, and is intended from little to medium projects that needs of fast implementation.

The idea behind this repository is to have a template ready to code and implement, whether you want to start a quick project and don't want to deal with the implementation of a web server, or if you want to start a project with little time to start.

## Quick Start

You need the have installed [**NodeJS**](https://nodejs.org) and [**NPM**](https://www.npmjs.com/) to start the installation.

Run this in terminal to install all the node packages and make this template ready to work.

```npm install```

Then, run this line to make the server start:

```SET DEBUG=simple-meen-template:* & npm start```

The server will be running on <http://localhost:3000>

***(optional)***: For development I recommend to have [nodemon](https://nodemon.io/) installed globally in your computer; so your server will be restarted when you change any **.js** file. You can do it running:

```npm install -g nodemon```

For run the server with nodemon use this:

```SET DEBUG=simple-meen-template:* & npm run nodemon```

## Frameworks and Libraries Used

As a MEEN template, it implements [**NodeJS**](https://nodejs.org) for the runtime system, [**ExpressJS**](http://expressjs.com/) as server framework, [**Embedded JavaScript (EJS)**](https://ejs.co/) for views elaboration and [**MongooseJS**](https://mongoosejs.com/) for database manipulation of MongoDB.

Also we use other node packages like [**PassportJS**](http://www.passportjs.org/) for user login and user persistence. Below is links to documentation of each package that is used in the workflow.

When you run "`npm install`" you install all the packages on table below; There is a link to each NPM package docs that display on the web.

| Node-Package                                                                  | Version |
| ---                                                                           | :---:   |
| [connect-ensure-login](https://www.npmjs.com/package/connect-ensure-login)    | ^0.1.1  |
| [connect-mongo](https://www.npmjs.com/package/connect-mongo)                  | ^3.0.0  |
| [cookie-parser](https://www.npmjs.com/package/cookie-parser)                  | ~1.4.4  |
| [debug](https://www.npmjs.com/package/debug)                                  | ~2.6.9  |
| [ejs](https://www.npmjs.com/package/ejs)                                      | ~2.6.1  |
| [express](https://www.npmjs.com/package/express)                              | ~4.16.1 |
| [express-session](https://www.npmjs.com/package/express-session)              | ^1.16.2 |
| [http-errors](https://www.npmjs.com/package/http-errors)                      | ~1.6.3  |
| [mongoose](https://www.npmjs.com/package/mongoose)                            | ^5.7.1  |
| [morgan](https://www.npmjs.com/package/morgan)                                | ~1.9.1  |
| [passport](https://www.npmjs.com/package/passport)                            | ^0.4.0  |
| [passport-local](https://www.npmjs.com/package/passport-local)                | ^1.0.0  |

### ExpressJS

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

* [Basic routing](http://expressjs.com/en/starter/basic-routing.html)
* [Routing](http://expressjs.com/en/guide/routing.html)
* [API Reference](http://expressjs.com/en/4x/api.html)
