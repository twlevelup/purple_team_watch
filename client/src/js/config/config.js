var Config = {};

if(process.env.NODE_ENV === 'production') {
  Config.firebaseUrl = 'https://purple-watch-prod.firebaseIO.com';
} else {
  Config.firebaseUrl = 'https://purple-watch-dev.firebaseIO.com';
}

module.exports = Config;
