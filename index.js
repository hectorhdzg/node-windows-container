const express = require('express');
const axios = require('axios').default;

const app = express();

app.get('/index.js', (request, response) => {
    console.log(request.url);
    axios.get("https://httpbin.org/status/200").then(_val => {
        const result = {
            protocol: request.protocol,
            headers: request.headers,
            rawHeaders: request.rawHeaders,
            envVar: process.env,
        }
        response.status(200).json(result);
    });
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log("Server running at http://localhost:%d", port);