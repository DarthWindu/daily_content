// Load our config
let config = require('./config.js').default();
const opn = require('opn');

const taskType = 'daily'

let onCompleted = function () {
    // Here is an example of replacing default behavior
    
    // util.default.onCompleted(taskType)
    console.log('Opened daily tabs'.grey)
}

let onRejected = function () {
    // Here is an example of replacing default behavior

    // util.default.onRejected(taskType)
    console.log('FAILED to open all daily tabs')
} 

module.exports = {
    onCompleted: onCompleted,
    onRejected: onRejected
}
