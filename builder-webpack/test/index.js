const path = require('path');
process.chdir(path.join(__dirname,'smoke/template'));
describe('builder-webpack unit test', () => {
    require('./unit/webpack-base-test');
})