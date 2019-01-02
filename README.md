# Daily Content

## Getting Started

Clone or fork the repository and run `npm install` inside of it.

Add your sites, wake-up time, and schedule to `config/default.json`, and you'll be up and running in no time!

Run `npm start` in a terminal and leave it open.

### Default Behavior

The program will open links to websites and files (files should have `file://` appended to their path - this is untested) on the schedule defined in `config/default.json`

To disable a given module, set its `enabled` to `false`. All modules are enabled by default.

### Configuration

The configuration logic is in `src/config.js`

The default configuration file is `config/default.json`

You also have the choice of spreading your configuration out into multiple files (as is done with `src/weekly/`) or consolidating them into one file (as is done in `src/monthly/`)

#### Time Values

Time is recognized in the format `hh:mm` or with the `wakeupKey` defined in `src/index.js`. By default, the `wakeupKey` is `wakeup`, and it refers to the wakeup time (set in `habits['wakeup_time']` in `config/default.json`)

### Testing

Use `npm test` to test your configuration and script.

The default test is `test/test.js`

## FAQ's

There are no FAQ's yet. Feel free to open an issue with `[FAQ]` prefixing the issue title!