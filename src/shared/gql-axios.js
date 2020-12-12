const axios = require('axios');

require('dotenv').config();

const endpoint = 'http://localhost:4000';

const headers = {
  userId: process.env.userId || '47888e3c-a716-401b-aa19-9ccc3d9cbef4',
  companyId: process.env.companyId || 1
};

const invoke = async (gqlString, variables) => {
  const data = await axios.post(
    endpoint,
    {
      query: gqlString,
      variables
    },
    { headers }
  );

  return data.data.data;
};

module.exports = { invoke };
