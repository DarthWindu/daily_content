// Load our config
var config = require('./config.js')
let defaultConfig = config.default()
let cronConfig = config.cron()

// Load dependencies
var cron = require('node-cron');
var colors = require('./util/colors').init() // init color settings and get colors object | Make sure this is required before util, daily, weekly, and monthly!

// Load custom actions
let util = require('./util/util')
let daily = require('./daily')
let weekly = require('./weekly/weekly')
let wakeUpKey = "wakeup"

// Configure cron jobs
configureDaily()
configureWeekly()


// ------ Functions ------

/**
 * Configures the daily cron job
 */
function configureDaily() {

    if (defaultConfig.daily.enabled) {
        
        /** Holds the cron time/frequency indicator */
        let cronCfg

        defaultConfig.daily.actions.forEach(element => {
            if (element.time != wakeUpKey) {
                cronCfg = cronConfig.makeDaily(element.time)
            } else {
                cronCfg = cronConfig.daily
            }

            util.log(`daily cron cnfg: ${cronCfg}`)
            cron.schedule(cronCfg, () => {
                util.openContent(element.content, daily.onCompleted, daily.onRejected)
            });
        });
    } else {
        util.warn('Daily Module is disabled!')
    }
}

/**
 * Configures every weekdayContainer
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

    // maps abbreviation to unabbreviated day
    let defaultConfigDay = util.weekdayMap[taskDay] 

    // gets the config for taskDay from default.json
    let dayCfg = defaultConfig.weekly[defaultConfigDay]

    if (dayCfg.enabled) {

        /** Holds the cron time/frequency indicator */
        let cronCfg;

        /** Holds the onCompleted and onRejected callbacks */
        let weekdayContainer = weekly[taskDay]

        dayCfg.actions.forEach(element => {

            if (element.time != wakeUpKey) {
                cronCfg = cronConfig.makeWeekly(element.time, taskDay)
            } else {
                cronCfg = cronConfig.weekly[taskDay]
            }

            util.log(`${taskDay} cron config: ${cronCfg}`)
            cron.schedule(cronCfg, () => {
                util.openContent(element.content, weekdayContainer.onCompleted, weekdayContainer.onRejected)
            })

        });

    } else {
        util.warn(`${taskDay} is disabled!`)
    }
}