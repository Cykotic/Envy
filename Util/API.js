const { APIkey } = require('../config.json');
const fetch = require('node-fetch');

class Util {
    constructor() {
        this.key = APIkey;
    }
    async requestAPI(address, port, time, method, pps) {
        await fetch('https://api.unlisted.to/tests/launch', {
            // APIkey: WPEVZfkYNy7JEC
            method: "POST",
            body: JSON.stringify({
                token: `${APIkey}`,
                target: `${address}`,
                port: `${port}`,
                duration: `${time}`,
                method: `${method}`,
                pps: `${pps}`
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => console.log(json));
    }
}
exports.default = Util;