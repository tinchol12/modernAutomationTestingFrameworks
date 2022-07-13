const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  video: false,
  screenshotOnRunFailure: true,  
  pageLoadTimeout: 30000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './mochawesome-reports',
    reportFilename: 'report',
    reportTitle: 'Automation Report',
    autoOpen: true,
    displayDuration: true,
    clearOldReports: true,
    enableConsole: true,
    enableFile: true,
    enableJSON: true,
    enableXML: true,
    logFileName: './reports/logs.log',
    showLog: true,
    showPassed: true,
    showFailed: true,
    showPending: true,
    showDuration: true,
    showSuiteNumber: true,
    showSpecTimings: true,
    showSpec: true,
    showSuite: true,
    showTime: true,
    showTotal: true,
    showConfiguration: true,
    chart: true,
    saveColors: true,
    overwrite: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
