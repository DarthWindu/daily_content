var config = require('config');

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
        }
    }
}