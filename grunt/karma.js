module.exports = {
  options: {
    configFile: 'karma.conf.js',
    browserNoActivityTimeout: 100000
  },
  watcher: {
    background: true,
    singleRun: false
  },
  test: {
    singleRun: true
  }
};
