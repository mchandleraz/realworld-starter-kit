// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  home: function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#RealWorldHeader')
      .assert.elementPresent('#RealWorldFooter')
      .end();
  },
};
