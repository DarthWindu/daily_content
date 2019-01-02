const opn = require('opn');

/**
 * Opens the content specified in `content`, calling `onCompleted` and `onRejected` on completion and rejection respectively.
 *
 * Returns a promise for opening all content in `content`
 * @param {*} content
 * @param {*} onCompleted
 * @param {*} onRejected
 */
let openContent = function (content, onCompleted, onRejected) {
    let tabs = []

    content.forEach(element => {
        tabs.push(opn(element))
    })

    return Promise.all(tabs).then(onCompleted, onRejected)
}

/**
 * Logs the default onCompleted message to console
 *
 * Ensure that the `colors` module has been initialized before calling this method!
 * @param {*} taskType
 */
function defaultOnCompleted(taskType) {
    log(`Completed ${taskType} task(s)`)
}

function defaultOnRejected(taskType) {
    warn(`Rejected ${taskType} task(s)!`)
}

function log(message) {
    console.log(_getLogPrefix() + message.log)
}

function warn(message) {
    console.log(_getLogPrefix() + message.magenta);
}

function _getLogPrefix() {
    // Replace the character `T` in the Date.toString with two spaces
    let dateTime = new Date().toJSON().slice(0, 19).replace(/[T]/g, '  ')

    // two spaces on end for readability
    let prefix = `[${dateTime}]  `.grey

    return prefix
}

/**
 * Returns an array with two elements, the number of minutes and the number of hours, by splitting `time`
 * 
 * `time = '16:00'` would yield `[0, 16]`
 * @param {*} time 
 */
function getMinAndHourFromTime(time) {
    let minutes = time.split(':')[1]
    let hours = time.split(':')[0]
    
    // Order mirrors cron configuration
    return [minutes, hours]
}

let weekdayMap = {
    sun: 'sunday',
    mon: 'monday',
    tue: 'tuesday',
    wed: 'wednesday',
    thu: 'thursday',
    fri: 'friday',
    sat: 'saturday',

    sunday   : 'sunday',
    monday   : 'monday',
    tuesday  : 'tuesday',
    wednesday: 'wednesday',
    thursday : 'thursday',
    friday   : 'friday',
    saturday : 'saturday',
}

module.exports = {
    openContent: openContent,
    log: log,
    warn: warn,
    default: {
        onCompleted: defaultOnCompleted,
        onRejected: defaultOnRejected
    },
    weekdayMap: weekdayMap,
    getMinAndHourFromTime: getMinAndHourFromTime
}