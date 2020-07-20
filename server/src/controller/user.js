const Base = require('./base.js');

module.exports = class extends Base {
  userAction() {
    this.body = 'hello world!';
  }
};
