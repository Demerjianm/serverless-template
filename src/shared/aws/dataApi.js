require('dotenv').config();

const data = require('data-api-client')({
  secretArn: process.env.DATA_API_SECRET,
  resourceArn: process.env.DATA_API_RESOURCE,
  database: process.env.DATA_API_DATABASE, // default database,
  region: 'us-west-2'
});

module.exports = { data };
