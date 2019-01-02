// Load our config
var config = require('../src/config')()
var expect = require('chai').expect;

describe('config', function () {
    it('is alive', function () {
        expect(config).is.not.null
    })

    it('has Daily', function () {
        expect(config.has('Daily')).true
    })
})