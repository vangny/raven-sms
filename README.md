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
[ReactJS] - Frontend framework
[NodeJS/Express]- Server-side framework
[Reach Router]- Navigate through webapp

## Author

Nathan Vang-Original

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details