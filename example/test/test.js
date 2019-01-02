// Load our config
var config = require('../src/config').default()
var expect = require('chai').expect;
const cron = require('node-cron');
var util = require('../src/util/util')

describe('config', function () {
    it('is alive', function () {
        expect(config).is.not.null
    })

    describe('daily', function () {

        it('is alive', function () {
            expect(config.has('daily')).true
        })

        it('is valid', function () {
            let wakeupTime = config.habits.wakeup_time
            let wakeupHour = wakeupTime.split(':')[0]
            let wakeUpMinute = wakeupTime.split(':')[1]

            // At wakeupTime every day
            let dailyCronConfig = `${wakeUpMinute} ${wakeupHour} * * *`

            expect(cron.validate(dailyCronConfig)).true
        })
    })

    describe('weekly', function () {
        it('is alive', function () {
            expect(config.has('weekly')).true
        })

        it('is valid', function () {})
    })

    describe('monthly', function () {
        it('is alive', function () {
            expect(config.has('monthly')).true
            expect(config.has('monthly.each_month')).true
        })

        it('is valid', function () {})
    })
})

describe('daily', function () {
    it('should have 2 actions', function () {
        expect(config.daily.actions.length).to.be.equal(2)
    })

    it('(first action) should have 3 content', function () {
        expect(config.daily.actions[0].content.length).to.be.equal(3)
        // util.openContent(config.daily.actions[0].content, null, null)
    })
})

describe('weekly', function () {
    it('(sunday) should have 2 actions', function () {
        expect(config.weekly.sunday.actions.length).to.be.equal(2)
    })
    it('(first action) should have 1 content', function () {
        expect(config.weekly.sunday.actions[0].content.length).to.be.equal(1)
    })
})

describe('monthly', function () {

})