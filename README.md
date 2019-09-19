# Simple MEEN Template

A Mongo-Express-EJS-Node Template.

## Description

This project is a starting point for simple web apps, that use MVC as software design pattern, and is intended from little to medium projects that needs of fast implementation.

The idea behind this repository is to have a template ready to code and implement, whether you want to start a quick project and don't want to deal with the implementation of a web server, or if you want to start a project with little time to start.

## Quick Start

You need the have installed [**NodeJS**](https://nodejs.org) and [**NPM**](https://www.npmjs.com/) to start the installation.

Run this in terminal to install all the node packages and make this template ready to work.

```npm install```

Then, run this line to make the server start:

```SET DEBUG=simple-meen-template:* & npm start```

***(optional)***: For development I recommend to have [nodemon](https://nodemon.io/) installed globally in your computer; so your server will be restarted when you change any **.js** file. You can do it running:

```npm install -g nodemon```

For run the server with nodemon use this:

```SET DEBUG=simple-meen-template:* & npm run nodemon```

## Frameworks and Libraries Used

As a MEEN template, this template implements **NodeJS** for the runtime system, **ExpressJS** as server framework, **Embedded JavaScript (EJS)** for views elaboration and **MongooseJS** for database manipulation of MongoDB.
