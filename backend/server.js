const path = require("path");
const express = require("express")
const app = express()

app.use("/pub", express.static(`${__dirname}/../frontend/public`));

app.get("/", (request, response) => {
    response.sendFile(path.join(`${__dirname}/../frontend/index.html`));
})

app.get("/kiskutya", (request, response) => {
    response.sendFile(path.join(`${__dirname}/../frontend/secret_data.json`));
})

const port = 9000;
const ipAddress = `http://127.0.0.1:${port}`;
app.listen(port, () => {
    console.log(ipAddress)
});