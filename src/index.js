// Load our config
var config = require('./config.js')()

// Load dependencies
const opn = require('opn')
var cron = require('node-cron');
var colors = require('./colors').init();

// Set logging theme

// Load custom actions
let daily = require('./daily.js')


// Configure cron jobs
configureDaily()

function configureDaily() {
    let wakeupTime = config.habits.wakeup_time

    let wakeupHour = wakeupTime.split(':')[0]
    let wakeUpMinute = wakeupTime.split(':')[1]

    // At wakeupTime every day
    let dailyCronConfig = `${wakeUpMinute} ${wakeupHour} * * *`

    if (config.daily.enabled) {

        _log('Daily Module is enabled')
        _log(`Daily Cron Config: ${dailyCronConfig}`)

        cron.schedule(dailyCronConfig, () => {
            daily()
        });
    } else {
        _warn('Daily Module is disabled')
    }
}

function _log(message) {
    console.log(_getLogPrefix() + message.log)
}

function _warn(message) {
    console.log(_getLogPrefix() + message.magenta);   
}

function _getLogPrefix() {
    // Replace the character `T` in the Date.toString with two spaces
    let dateTime = new Date().toJSON().slice(0, 19).replace(/[T]/g, '  ')

    // two spaces on end for readability
    let prefix = `[${dateTime}]  `.grey

    return prefix
}