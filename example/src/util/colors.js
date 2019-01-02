var colors = require('colors');

let initialize = function () {
    colors.setTheme({
        log: "cyan"
    })
    return colors;
}



module.exports = {
    init: initialize,
}