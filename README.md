Raven SMS
===============

Raven SMS is a web app designed to provide a way for businesses to contact their guests through means similar to text messaging.

## Main Features
* Staff may send guests new messages or make use of templates
* Template messages are will be adjusted to each guest as the staff picks which guest they want to contact and which business the guest is currently staying with

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing
1. Clone or download the repo

```
clone https://github.com/vangny/raven-sms.git
```

2. Install dependencies
```
npm i
```

3. Ensure the server is running
```
npm run server-dev
```

4. Make sure the bundle has been compiled
```
npm run build:dev
```

5. The webapp should be serverd locally on port 3030. If that port is already being used, you can change the port within the index.js file of the server folder

## Built With
[ReactJS](https://github.com/facebook/react) - Frontend framework - Used for its smaller initial library, modularity, and pure JavaScript. Templates, current guests and companies are JSON files, so a JavaScript approach felt best to access them due to being literal JavaScript objects.

[NodeJS](https://github.com/nodejs/node) - JavaScript runtime environment - Sticking with the JavaScript approach, NodeJS fit the bill perfectly as it handles JSON files effortlessly.

[ExpressJS](https://github.com/expressjs/express) - Web application framework - Since NodeJS is the choice to run the server, Express is lighweight, highly modular, and allows developers to quickly and intuitively design web applications.

[ReachRouter](https://github.com/reach/router) - Router used to navigate through the webapp - Reach Router is a much lighter version of React Router and is used to help users navigate through the app.

## Design Choice
Against the usual light themed messenger applications out there, I decided to have some fun with the design - using the name of the app as inspiration. Ravens are a dark colored birds that can be train to do a multitude of things, like sending messages from one location to another. A darker color scheme was implemented, with an off-white/tan color to bring some smooth contrast to the design. Both the Guests and Companies components serve two purposes, selecting their respective options, and providing myself the ability to take lazy loading another when I choose to do so in the future. The final component brings users to the message board. Users are provided the guest's name, room number, and business that they are currently staying with to help with writing up messages. They are also given a choice to reselect both the guest and company.

## Future Additions
* Convert app to a progressive web app
* Make use of a database to store:
    * Both guest and staff user accounts
    * Chat history
    * Transfer JSON files into their respective tables
* Fix bugs such as:
    * Keep the chatbox scroll position at the bottom
* Differentiate users from guests and staff
* Allow actual messaging between guests and staff
* Enable a fluid and live interaction between users
    * More than likely using sockets in the future
* Performance improvements:
    * Enable lazy loading
    * Minify
    * Uglify
    * Compress files

## Author
Nathan Vang

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details