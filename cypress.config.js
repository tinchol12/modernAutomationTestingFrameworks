const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;


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
                      overwrite: false,
                      reportPageTitle: 'Test Run Report',
                      embeddedScreenshots: true,
                      embeddedVideo: true,
                      inlineAssets: true,
                      saveAllAttempts: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('file:preprocessor', cucumber())
    },
   // specPattern: 'cypress/integration/examples/*.js'
   // specPattern: 'cypress/integration/examples/cucumber/*.feature'
      specPattern: 'cypress/integration/swag/*.feature'
  },
});
