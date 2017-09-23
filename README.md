# Altran Frontend Assessment

## Instructions for running the project

The project has a virtual environment made with Docker. 
The environment can be run in two different ways, with Docker or install necessary packages in your development environment.

## Instructions for running the project with Docker

### Requirements 

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) Docker >= 17.05.0
- [Docker Compose](https://docs.docker.com/compose/) Docker-Compose >= 1.8.0

### Development

1. Go into the project folder and execute the `docker-compose up --build` command. This command will install all necessary packages into the container and leave the server ready to be used
2. Open the browser at http://localhost/
3. To enter the container run `docker exec -it (container name) bash` command

## Instructions for running the project in the local enviroment

### Requirements 

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 6.x.x, npm >= 3.x.x
- [watch-http-server](https://www.npmjs.com/package/watch-http-server) (`npm install --global watch-http-server`)
- [bower](https://bower.io/) (`npm install --global bower`)
- [typings](https://www.npmjs.com/package/typings) (`npm install --global typings`)

### Development

1. Run `npm install` to install the server dependencies.
2. Run `bower install` to install the server dependencies.
3. Run `npm run start_dev` to run the server in development mode.
4. Open the browser at http://localhost:8080/

## TypeScript Code

The TypeScript code is located in the `client` folder and is automatically transpiler to ES5 into `public` folder.

## Frameworks & Libraries

### Frameworks
- Angular 1.4.8
- Bootstrap - Theme Superhero

### angular-ui-router
- It is used to manage routes

### watch-http-server
- It is used to server up

### bower
- It is used to UI components installer

### typings
- It is used to TS code transpiler to ES5
