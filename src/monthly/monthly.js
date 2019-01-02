let util = require('../util/util')

let onCompleted = function (month) {
    util.default.onCompleted(month)
}

let onRejected = function (month) {
    util.default.onRejected(month)
}

let eachMonth = configure(() => onCompleted('each_month'), () => onRejected('each_month'))

let jan = configure(() => onCompleted('jan'), ()=> onRejected('jan'))
let feb = configure(() => onCompleted('feb'), ()=> onRejected('feb'))
let mar = configure(() => onCompleted('mar'), ()=> onRejected('mar'))
let apr = configure(() => onCompleted('apr'), ()=> onRejected('apr'))
let may = configure(() => onCompleted('may'), ()=> onRejected('may'))
let jun = configure(() => onCompleted('jun'), ()=> onRejected('jun'))
let jul = configure(() => onCompleted('jul'), ()=> onRejected('jul'))
let aug = configure(() => onCompleted('aug'), ()=> onRejected('aug'))
let sep = configure(() => onCompleted('sep'), ()=> onRejected('sep'))
let oct = configure(() => onCompleted('oct'), ()=> onRejected('oct'))
let nov = configure(() => onCompleted('nov'), ()=> onRejected('nov'))
let dec = configure(() => onCompleted('dec'), ()=> onRejected('dec'))


function configure(onCompleted, onRejected) {
    return {
        onCompleted: onCompleted,
        onRejected: onRejected
    }
}

module.exports = {
    jan: jan,
    feb: feb,
    mar: mar,
    apr: apr,
    may: may,
    jun: jun,
    jul: jul,
    aug: aug,
    sep: sep,
    oct: oct,
    nov: nov,
    dec: dec,
    each_month: eachMonth
}