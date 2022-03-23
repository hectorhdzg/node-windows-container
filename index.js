const http = require('http');
const https = require('https');

var server = http.createServer(function (req, res) {   //create web server

    console.log("Received request:" + req.url);

    if (req.url == '/index.js') {
        let options = {
            host: "https://httpbin.org"
        };
        https.get(options, (response) => {
            const result = JSON.stringify({ test: "test" });
            response.on('data', (chunk) => { });
            response.on('end', () => {
                console.log(JSON.parse(result));
            });
        }).on("error", (error) => {
            console.log("Error: " + error.message);
        });
        res.doestExist().test;
        res.write("Hello World");
        res.end();
    }

    else if (req.url == "/error.js") {
        console.log(res.url);
        res.doestExist().test;
    }

    else {
        res.write("Something");
        res.end();
    }
});

const port = process.env.PORT || 5000;
server.listen(port);
console.log("Server running at http://localhost:%d", port);