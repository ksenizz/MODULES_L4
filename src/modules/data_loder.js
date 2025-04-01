const https = require('https');

function dataLoder(url, callback) {
  const result = {
    data: null,
    isLoading: true,
    error: null
  };
  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      try {
        result.data = JSON.parse(data);
      } catch (error) {
        result.error = 'Ошибка при разборе JSON';
      } finally {
        result.isLoading = false;
        callback(result);
      }
    });
  }).on('error', (error) => {
    result.error = error.message;
    result.isLoading = false;
    callback(result);
  });
}
module.exports = { dataLoder };
