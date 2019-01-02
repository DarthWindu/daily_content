// Load our config
let config = require('./config.js')();
const opn = require('opn');

let dailyContent = config.daily.content

let daily = function () {
    let tabs = []

    dailyContent.forEach(element => {
        tabs.push(opn(element))
    });

    Promise.all(tabs).then(_onCompleted, _onCompleted)
}

function _onCompleted() {
    console.log('Opened all tabs')
}

function _onRejected() {
    console.log('FAILED to open all tabs')
}

module.exports = daily
