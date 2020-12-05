const https = require('https');

module.exports = function tokenRequest() {
  // Requests an IAM token from IBM Cloud
  return new Promise((resolve) => {
    // IAM token request documentation:
    // https://cloud.ibm.com/docs/account?topic=account-iamtoken_from_apikey

    const payload = `my-payload`;

    const options = {
      protocol: 'https:',
      hostname: 'iam.cloud.ibm.com',
      path: '/identity/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data.token);
      });
    });

    req.write(payload);
    req.end();
  });
};
