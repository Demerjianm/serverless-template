const { Pool } = require('pg');
require('dotenv').config();

const normalConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDB,
  password: process.env.PGPASS,
  port: process.env.PORT
};

const testConfig = {
  user: process.env.TEST_PGUSER,
  host: process.env.TEST_PGHOST,
  database: process.env.TEST_PGDB,
  password: process.env.TEST_PGPASS,
  port: process.env.TEST_PORT
};

const config = process.env.TEST === 'true' ? testConfig : normalConfig;

const pool = new Pool(config);

module.exports = { pool };
