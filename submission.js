const http = require('http');
const data = require('./data.json');

module.exports = function submit() {
  // Submits the user data for validation
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    }
  };

  const req = https.request(options, (res) => {
    res.on('end', () => {
      console.log('OK');
    });
  });

  const payload = data + token;
  payload.submit_confirmation = false;

  req.write(JSON.stringify(payload));
  req.end();
};
