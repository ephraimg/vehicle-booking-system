# vehicle-booking-system

## Author

Ephraim Glick (github.com/ephraimg)

## What is this?

This application provides a system for registering new vehicles in a fleet and creating new jobs for those vehicles. When attempting to create a job, your request will be rejected if no vehicle is available. Otherwise, a vehicle will be automatically assigned to the job.

## Set-up

### React

In order to transpile ES6 / ES7 code, this repo uses Babel and Webpack. Settings are in .babelrc and webpack.config.js.

### Server

This application is designed with a Node / Express server. It should run on any relatively recent version of Node, but was tested using 8.10.0. Install packages using npm / yarn.

### Database

The application uses Postgres. To get set up:

- Create a Postgres database named 'vehicle_booking'
- Create tables: psql vehicle_booking < db/schema.sql
- Set environment variables for connections, as in: postgresql://dbuser:secretpassword@database.server.com:3211/mydb
