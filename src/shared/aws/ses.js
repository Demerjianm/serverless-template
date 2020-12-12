// eslint-disable-next-line import/no-extraneous-dependencies
const { SES } = require('aws-sdk');
const { isArray } = require('lodash');

const ses = new SES({ region: 'us-west-2' });

/**
 * @param {string | array} emailAddress - the address or addresses we are sending to
 * @param {string} templateName - which template are we using from aws ses
 * @param {object} templateData - the data fields to be filled in the template, this depends
 *   on the template being used
 */
const sendTemplatedEmail = async ({
  emailAddress,
  templateName,
  templateData
}) => {
  try {
    return new Promise((resolve, reject) => {
      const params = {
        Destination: {
          BccAddresses: isArray(emailAddress) ? emailAddress : [emailAddress],
          ToAddresses: isArray(emailAddress) ? emailAddress : [emailAddress]
        },
        Source: process.env.EMAIL_ADDRESS /* required */,
        Template: templateName /* required */,
        TemplateData: JSON.stringify({ ...templateData }),
        ReplyToAddresses: ['no-reply@symply.io']
      };

      console.info('Templated Email Params: ', JSON.stringify(params, null, 2));
      ses.sendTemplatedEmail(params, (err, data) => {
        console.info('Templated Email Response:', { err, data });
        if (err) reject(err);

        resolve(data.MessageId);
      });
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = { sendTemplatedEmail };
