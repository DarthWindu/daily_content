// The purpose of this file is to provide cleaner imports to dependents
let config = require('../config.js').default();
const util = require('../util/util');

let sun    = require('./sunday')
let mon    = require('./monday')
let tue   = require('./tuesday')
let wed = require('./wednesday')
let thu  = require('./thursday')
let fri    = require('./friday')
let sat  = require('./saturday')

module.exports = {
    sun: sun,
    mon: mon,
    tue: tue,
    wed: wed,
    thu: thu,
    fri: fri,
    sat: sat
}

/* Alternatively, you can configure each weekday here, to keep your weekly config in one file instead of spreading it out */
/* Just replace the abbreviated weekdays in `module.exports` with their unabbreviated counterparts, and comment out or remove the unused import statements */

let sunday    = configure(config.weekly.sunday.content, () => util.default.onCompleted('sunday'), () => util.default.onRejected('sunday'))
let monday    = configure(config.weekly.monday.content, () => util.default.onCompleted('monday'), () => util.default.onRejected('monday'))
let tuesday   = configure(config.weekly.tuesday.content, () => util.default.onCompleted('tuesday'), () => util.default.onRejected('tuesday'))
let wednesday = configure(config.weekly.wednesday.content, () => util.default.onCompleted('wednesday'), () => util.default.onRejected('wednesday'))
let thursday  = configure(config.weekly.thursday.content, () => util.default.onCompleted('thursday'), () => util.default.onRejected('thursday'))
let friday    = configure(config.weekly.friday.content, () => util.default.onCompleted('friday'), () => util.default.onRejected('friday'))
let saturday  = configure(config.weekly.saturday.content, () => util.default.onCompleted('saturday'), () => util.default.onRejected('saturday'))

/**
 * Returns a map of the parameters
 * @param {*} content 
 * @param {*} onCompleted 
 * @param {*} onRejected 
 */
function configure(content, onCompleted, onRejected) {
    return {
        content: content,
        onCompleted: onCompleted,
        onRejected: onRejected
    }
}