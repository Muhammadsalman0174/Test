const { defineConfig } = require('cypress')
const ClientName = 'VinnCorp'; 
module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  execTimeout: 60000,
  pageLoadTimeout: 180000,
  responseTimeout: 60000,
  waitForAnimations: true,
  trashAssetsBeforeRuns: false,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: `mochawesome-report/AutomationReports/${ClientName}`,
    overwrite: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    json: true,
    quiet: false,
    charts: true,
    reportFilename: `${ClientName} AutomationReport`,
    reportName: `${ClientName} Automation Report`,
    reportTitle: `${ClientName} Automation Report`,
    code: false,
    attachments: true,
    timestamp: 'mmddyyyy_HHMMss',
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  screenshotOnRunFailure: true,
  screenshotsFolder: `mochawesome-report/AutomationReports/${ClientName}`,
  e2e: {
  
 baseUrl: 'https://www.8x8.com/request-quote',
    specPattern:
       'cypress/e2e/*.js',
    
  },
  
})
