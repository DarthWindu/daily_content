let config = require('../config.js').default();
const util = require('../util/util');

let content = config.weekly.saturday.content
let taskType = 'saturday'

// util.openContent(content, _onCompleted, _onRejected)


let onCompleted = function () {
    // replace with custom logic to override default behavior
    util.default.onCompleted(taskType)
}

let onRejected = function () {
    // replace with custom logic to override default behavior
    util.default.onRejected(taskType)
} 

module.exports = {
    content: content,
    onCompleted: onCompleted,
    onRejected: onRejected
}