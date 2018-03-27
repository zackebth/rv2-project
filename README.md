# Ramverk2 project

### Introduction

This project is built with MEAN stack which stands for MongoDB - Express - Angular - Nodejs. The reason why it's built on MEAN
is because it's an very smooth and effiecient way to build a new project or application. Some points to bring why MEAN stack is
good way to develop with:

1. Isomorphic JavaScript
2. Multiple platform compatible
3. One Language Development Journey (JS)
4. Stable & Constant functionality with growing traffic
5. Offers wide range of features
6. Ability to Load & manage unstuctured data

### About the application

rv2-project is a todo list that is focused for a family that are in need of a task manager. With this application you can easily
create todos and remove them. You can keep track on how many todos that are left. There is a chat built in where you in the family
can setup your usernames and chat instantly with eachother.

### Requierments / Features

| Requierment          | Info                                                    |
| -------------------- | --------------------------------------------------------|
| Create todo          | The user should be able to create a todo                |
| Delete todo          | The user should be able to delete a todo                |
| Number of todos left | The user should be able to see the amount of todos left |
| chat                 | The user/users should be able to chat in real time      |


### Technologies
#### Mean stack + Socket.io

| Technology   | Why                            |
| -------------|--------------------------------|
| MongoDB      | Non relational database        |
| Express      | Better code structure with MVC |
| Angularjs    | A declarative user interface   |
| Nodejs       | Fast and scalable              |
| Socket.io    | Simple to setup a chat         |

### Installation

#### Before Installation requierments

You need to have Mongo and Nodejs:

You can download Nodejs from here - [Node](https://nodejs.org/en/)

Here is a guide for mongodb - [Mongo](https://docs.mongodb.com/manual/installation/)

#### Installation steps

1. Clone the repo - git clone https://github.com/zackebth/rv2-project
2. cd rv2-project
3. run - npm install


#### Running the application

1. Open two windows of your command tool
2. Start mongodb in one of them - cmd: mongod
3. Start the applicaiton in the other window - cmd: npm start(alternative: npm run devStart)

#### Alternative way:

For this you need to have Docker, you can install docker from here: [Docker](https://docs.docker.com/install/)

1. Run - npm run docker-start
2. Run - npm run docker-stop to stop the application

### Testing

Currently there is no testing for this application since the functionality is very basic and few. I saw it as an excess of time to
spend for the current state of the application.

Instead of testing the project I would like to bring a few testing frameworks that could be used if there will be updates for
application and code coverage would be appropriate.

##### Testing AngularJS

Why Jasmine:
Jasmine is one of the most popular JavaScript unit testing frameworks. Jasmine basicly provides you with everthing you need. Jasmine comes with assertions, spies, and mocks, so pretty much everything you may need to start developing your unit tests. Jasmine makes the initial setup easy and you can still add libraries if you really require unit functionality. Globals make it easy to start adding tests to your app right away.

#### Testing Nodejs

##### Mocha

Why Mocha:
Aswell as Jasmine, Mocha is a flexible library providing developers with just the base test structure. Functionality for assertions, spies, mocks, and the like are then added via other libraries/plugins. Mocha can be integrated with flexible 
configuration with libraries. Mocha includes the test structure as globals, saving you time by not having to include or require it in every file. The downside is that plugins just might require you to include these anyway, leading to inconsistencies.

