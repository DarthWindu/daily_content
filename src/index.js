// Load our config
var config = require('./config.js')
let defaultConfig = config.default()
let cronConfig = config.cron()

// Load dependencies
var cron = require('node-cron');
var colors = require('./util/colors').init() // init color settings and get colors object

// Set logging theme

// Load custom actions
let util = require('./util/util')
let daily = require('./daily')
let weekly = require('./weekly/weekly')

// Load global data 

/* let wakeupTime = config.habits.wakeup_time
let wakeupHour = wakeupTime.split(':')[0]
let wakeUpMinute = wakeupTime.split(':')[1]

let cronConfig = {
    daily: `${wakeUpMinute} ${wakeupHour} * * *`,
    weekly: {
        sun: `${wakeUpMinute} ${wakeupHour} * * sun`,
        mon: `${wakeUpMinute} ${wakeupHour} * * mon`,
        tue: `${wakeUpMinute} ${wakeupHour} * * tue`,
        wed: `${wakeUpMinute} ${wakeupHour} * * wed`,
        thu: `${wakeUpMinute} ${wakeupHour} * * thu`,
        fri: `${wakeUpMinute} ${wakeupHour} * * fri`,
        sat: `${wakeUpMinute} ${wakeupHour} * * sat`,
    }
} */

// Configure cron jobs
// daily()
configureDaily()
configureWeekly()

/**
 * Configures the daily cron job
 */
function configureDaily() {

    if (defaultConfig.daily.enabled) {

        util.log(`daily cron cnfg: ${cronConfig.daily}`)

        cron.schedule(cronConfig.daily, () => {
            util.openContent(daily.content, daily.onCompleted, daily.onRejected)
        });
    } else {
        util.warn('Daily Module is disabled!')
    }
}

/**
 * Configures every weekday
 */
function configureWeekly() {
    configureWeekday('sun')
    configureWeekday('mon')
    configureWeekday('tue')
    configureWeekday('wed')
    configureWeekday('thu')
    configureWeekday('fri')
    configureWeekday('sat')
}

/**
 * Configures a cron job for a weekday defined by `taskDay`
 * 
 * Ensure that `taskDay` is one of the export keys in `weekly/weekly.js`
 * @param {*} taskDay 
 */
function configureWeekday(taskDay) {

    let defaultConfigDay = util.weekdayMap[taskDay] 

    if (defaultConfig.weekly[defaultConfigDay].enabled) {

        let weekday = weekly[taskDay]

        util.log(`${taskDay} cron config: ${cronConfig.weekly[taskDay]}`)

        cron.schedule(cronConfig.weekly[taskDay], () => {
            util.openContent(weekday.content, weekday.onCompleted, weekday.onRejected)
        })

    } else {
        util.warn(`${taskDay} is disabled!`)
    }
}