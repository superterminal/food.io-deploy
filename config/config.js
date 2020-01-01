const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb://user:password123@ds259348.mlab.com:59348/heroku_hrx53qld',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];