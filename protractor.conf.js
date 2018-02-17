// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  multiCapabilities: 
  [
    {
      browserName: 'chrome',
      platform: 'windows 10'
    },
    {
      browserName: 'firefox',
      platform: 'windows 10'
    },
    {
      browserName: 'microsoftedge',
      platform: 'windows 10'
    },
    {
      browserName: 'internet explorer',
      platform: 'windows 10'
    },

    {
      browserName: 'chrome',
      platform: 'windows 7'
    },
    {
      browserName: 'firefox',
      platform: 'windows 7'
    },
    {
      browserName: 'internet explorer',
      platform: 'windows 7'
    },

    {
      browserName: 'chrome',
      platform: 'macos 10.13'
    },
    {
      browserName: 'firefox',
      platform: 'macos 10.13'
    },
    {
      browserName: 'safari',
      platform: 'macos 10.13'
    },

    {
      browserName: 'chrome',
      platform: 'macos 10.12'
    },
    {
      browserName: 'firefox',
      platform: 'macos 10.12'
    },
    {
      browserName: 'safari',
      platform: 'macos 10.12'
    },

    {
      browserName: 'chrome',
      platform: 'linux'
    },
    {
      browserName: 'firefox',
      platform: 'linux'
    },

    {
      seleniumAddress: "https://us1.appium.testobject.com/wd/hub",
      testobject_api_key: process.env.TESTOBJECT_KEY,
      browserName: 'chrome',
      platformName: 'android'
    },
    {
      seleniumAddress: "https://us1.appium.testobject.com/wd/hub",
      testobject_api_key: process.env.TESTOBJECT_KEY,
      browserName: 'firefox',
      platformName: 'android'
    },
    {
      browserName: 'browser',
      deviceName: 'android emulator',
      platformVersion: '6.0'
    },

    {
      seleniumAddress: "https://us1.appium.testobject.com/wd/hub",
      testobject_api_key: process.env.TESTOBJECT_KEY,
      browserName: 'safari',
      platformName: 'ios'
    },
    {
      browserName: 'safari',
      deviceName: 'iphone simulator',
      platformVersion: '11.2'
    },
    {
      browserName: 'safari',
      deviceName: 'iphone simulator',
      platformVersion: '11.1'
    }
  ],

  sauceUser: "J-o-s-h-S-i-m-s-MEAN-Demo", 
  sauceKey: process.env.SAUCE_KEY,
  sauceBuild: "0.0.0",

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};