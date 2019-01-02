# Daily Content

## Getting Started

Clone the repository and run `npm install` inside of it.

### Default Behavior

The program will open links to websites and files (files should have `file://` appended to their path - this is untested) on the schedule defined in `config/default.json`

To disable a given module, set its `enabled` to `false`. All modules are enabled by default.

### Configuration

The configuration logic is in `src/config.js`

The default configuration file is `config/default.json`

#### Time Values

Time is recognized in the format `hh:mm` or with the `wakeupKey` defined in `index.js`. By default, the `wakeupKey` is `wakeup`, and it refers to the wakeup time (set in `habits['wakeup_time']` in `config/default.json`)

### Testing

Use `npm test` to test your configuration and script.

The default test is `test/test.js`

## FAQ's

There are no FAQ's yet. Feel free to open an issue with `[FAQ]` prefixing the issue title!