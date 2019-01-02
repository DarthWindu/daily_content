var config = require('config');
var util = require('./util/util')

let wakeupTime = config.habits.wakeup_time
let wakeupHour = wakeupTime.split(':')[0]
let wakeUpMinute = wakeupTime.split(':')[1]

module.exports = {
    default: getDefaultConfig,
    cron: getCronConfig,
    wakeupTime: wakeupTime,
    wakeUpMinute: wakeUpMinute,
    wakeupHour: wakeupHour
}

/**
 * Returns the config defined in `config/default.json`
 */
function getDefaultConfig() {
    return config;
}

/**
 * Returns a map of cron frequency/schedule configurations
 */
function getCronConfig() {
    return {
        daily: `${wakeUpMinute} ${wakeupHour} * * *`,
        weekly: {
            sun: `${wakeUpMinute} ${wakeupHour} * * sun`,
            mon: `${wakeUpMinute} ${wakeupHour} * * mon`,
            tue: `${wakeUpMinute} ${wakeupHour} * * tue`,
            wed: `${wakeUpMinute} ${wakeupHour} * * wed`,
            thu: `${wakeUpMinute} ${wakeupHour} * * thu`,
            fri: `${wakeUpMinute} ${wakeupHour} * * fri`,
            sat: `${wakeUpMinute} ${wakeupHour} * * sat`,
        },
        makeDaily: makeDaily,
        makeWeekly: makeWeekly,
        makeMonthly: makeMonthly
    }
}

function makeDaily(time) {
    var timeComponents = util.getMinAndHourFromTime(time)
    return `${timeComponents[0]} ${timeComponents[1]} * * *`
}

/**
 * Where `time` is `hh:mm` and day is 3-letter indicator of a weekday (or 0-7).
 * @param {*} time 
 * @param {*} day 
 */
function makeWeekly(time, day) {
    var timeComponents = util.getMinAndHourFromTime(time)
    return `${timeComponents[0]} ${timeComponents[1]} * * ${day}`
}

/**
 * Returns a cron job frequency/time indicator based on parameters
 * 
 * Pass `*` for day to yield an indicator for every day of the month
 * 
 * You may use steps and ranges.
 * @param {*} month 
 * @param {*} day 
 * @param {*} time 
 */
function makeMonthly(month, day, time, weekday = '*') {
    var timeComponents = util.getMinAndHourFromTime(time)
    return `${timeComponents[0]} ${timeComponents[1]} ${day} ${month} ${weekday}`
}