const http = require("http");
const server = http.createServer((req, res) => {
    res.end("server is started....")
});
server.listen(5000, () => {
    console.log("server is started at port number 5000")
});


