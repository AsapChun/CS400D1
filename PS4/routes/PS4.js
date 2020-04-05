var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
require('dotenv').config();

const key = process.env.API_KEY;

var request = require(
    "request");

var options = { method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs:
        { q: 'Tokyo',
            appid: key,
            units: 'metric' },
    headers:
        { 'cache-control': 'no-cache',
            Connection: 'keep-alive',
            'Content-Length': '27',
            'Accept-Encoding': 'gzip, deflate',
            Host: 'api.openweathermap.org',
            'Postman-Token': 'b9f7d537-bfca-40e3-81b0-9b1b96e95ccb,fcd78c24-7c25-46a3-a744-eff76e9a10dc',
            'Cache-Control': 'no-cache',
            Accept: '*/*',
            'User-Agent': 'PostmanRuntime/7.19.0',
            'Content-Type': 'application/x-www-form-urlencoded' },
    form: { title: 'Trust the Process' } };

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    router.get('/', function(req, res, next) {
        //console.log(res.end(JSON.stringify(body, null, 2)).toArray())
        var data = JSON.parse(body);
        console.log(data.weather);
        const long =data.coord.lon;
        const lat = data.coord.lat;
        const Wd = data.weather.main;
        const temp = data.main.temp;
        const max = data.main.temp_max;
        const low = data.main.temp_min;
        const vis = data.visibility;
        const feel = data.main.feels_like;

        res.render('weather', { title: 'Tokyo Weather Data', lat: JSON.stringify(lat), lon: JSON.stringify(long),
            temp: JSON.stringify(temp), max: JSON.stringify(max), low: JSON.stringify(low), V: JSON.stringify(vis),
            feels: JSON.stringify(feel)
        });
    });
});
module.exports = router;