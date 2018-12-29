const enzyme = require('enzyme'); //eslint-disable-line
const Adapter = require('enzyme-adapter-react-16'); //eslint-disable-line

enzyme.configure({ adapter: new Adapter() });


// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require('babel-register')(); //eslint-disable-line
