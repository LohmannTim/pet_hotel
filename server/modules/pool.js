var pg = require('pg');

var config = {
    database: 'Pet-hotel',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
};

module.exports = pg.Pool(config);