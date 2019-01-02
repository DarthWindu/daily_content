// The purpose of this file is to provide cleaner imports to dependents
let config = require('../config.js').default();
const util = require('../util/util');

let sun = require('./sunday')
let mon = require('./monday')
let tue = require('./tuesday')
let wed = require('./wednesday')
let thu = require('./thursday')
let fri = require('./friday')
let sat = require('./saturday')

module.exports = {
    sun: sun,
    mon: mon,
    tue: tue,
    wed: wed,
    thu: thu,
    fri: fri,
    sat: sat
}

//  Alternatively, you can configure each weekday here, to keep your weekly config in one file instead of spreading it out 
//  Just replace the `require` statements with the code below

/* let sun = configure(() => util.default.onCompleted('sunday'), () => util.default.onRejected('sunday'))
let mon = configure(() => util.default.onCompleted('monday'), () => util.default.onRejected('monday'))
let tue = configure(() => util.default.onCompleted('tuesday'), () => util.default.onRejected('tuesday'))
let wed = configure(() => util.default.onCompleted('wednesday'), () => util.default.onRejected('wednesday'))
let thu = configure(() => util.default.onCompleted('thursday'), () => util.default.onRejected('thursday'))
let fri = configure(() => util.default.onCompleted('friday'), () => util.default.onRejected('friday'))
let sat = configure(() => util.default.onCompleted('saturday'), () => util.default.onRejected('saturday'))
 */

 
/**
 * Returns a map of the parameters
 * @param {*} content 
 * @param {*} onCompleted 
 * @param {*} onRejected 
 */
function configure(onCompleted, onRejected) {
    return {
        onCompleted: onCompleted,
        onRejected: onRejected
    }
}