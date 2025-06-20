import { generate } from "multiple-cucumber-html-reporter";

export const config: WebdriverIO.Config = {
  runner: "local",
  hostname: "172.17.48.1",
  port: 4723,
  tsConfigPath: "./tsconfig.json",
  specs: ["../src/features/**/*.feature"],
  exclude: [
    // 'path/to/excluded/files'
  ],
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Pixel XL",
      "appium:platformVersion": "9.0",
      "appium:udid": "emulator-5554",
      "appium:automationName": "UiAutomator2",
      "appium:autoGrantPermissions": true,
      "appium:appPackage": "com.wallet.crypto.trustapp",
      "appium:autoDismissAlerts": true,
      "appium:autoAcceptAlerts": true,
    },
  ],
  logLevel: "debug",
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/lighthouse-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/appium-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  waitforTimeout: 100000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["cucumber-viewport-logger"],
  framework: "cucumber",

  reporters: ["spec", "cucumberjs-json"],

  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ["./src/step-definitions/steps.ts"],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> Only execute the scenarios with name matching the expression (repeatable).
    name: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },

  after: function () {
    generate({
      jsonDir: ".tmp/json/",
      reportPath: "./reports/html/",
      metadata: {
        browser: {
          name: "chrome",
          version: "N/A",
        },
        device: "Android Emulator",
        platform: {
          name: "Android",
          version: "9.0",
        },
      },
      customData: {
        title: "Run Info",
        data: [
          { label: "Project", value: "Trust Wallet Android Automation" },
          { label: "Release", value: "1.0.0" },
          { label: "Tested by", value: "Azzam" },
        ],
      },
    });
  },
};
