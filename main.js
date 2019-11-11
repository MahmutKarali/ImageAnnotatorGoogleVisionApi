const express = require('express');
const app = express();
const vision = require('@google-cloud/vision');
// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'googleapikey.json'
});

client
  .labelDetection('./mevlana.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;
    labels.forEach(label => {
      console.log(
        {
          description : label.description,
          score: label.score
        })}
      );
  })
  .catch(err => {
    console.error('ERROR:', err);
  }); 

app.listen(5000, '127.0.0.1', () => console.log('Server running'));
