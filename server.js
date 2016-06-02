var express = require('express')
  , cors = require('cors')
  , Twit = require('twit');

  //setting twitter oAuth access codes
  var client = new Twit( {
  consumer_key: 'ofs9GL5UL7HGcJxpqRVVuKFIF',
  consumer_secret: 'vAQXMlyB0UT9J7AKlbon9ubrIouIUuTMAmsi140u64TrUQpESr',
  access_token: '432972257-z8OV8iHKW9WGMrozuv6mjK0cGpwannZVCRJRhfN0',
  access_token_secret: 'ZhPXeKwnEM9f6scxQuXqssjIt1BkQSTq9cujARCTjDg1N'
});

var app = express();
app.use(cors());

// publishing static elements
app.use('/Jam3Test/public', express.static("public"));



//retrieving last 5 tweets with #jam3 hashtag
app.get('/Jam3Test/jsonTwit', function (req, res) {
  client.get('search/tweets', {q: '%23' + req.query.hash ,result_type: 'recent',count: 5},
  function(error,data,response){
    if(error) throw error;
    res.stautsCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(JSON.stringify(data));
  });
});

app.use(/.*/, express.static("./"));

app.listen(8080);
console.log('Listening on port 8080...');
