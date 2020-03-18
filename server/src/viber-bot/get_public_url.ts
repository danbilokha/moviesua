import * as http from 'http';

let options = {
    hostname: '127.0.0.1',
    port: 4040,
    path: '/api/tunnels',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

export const getPublicUrl = function () {

    return new Promise((resolve, reject) => {

        let req = http.request(options, function (res) {
            res.setEncoding('utf8');
            res.on('data', function (config: any) {
                config = JSON.parse(config);
                const httpsTunnel = config.tunnels.filter((t: any) => t.proto === 'https').pop();
                resolve(httpsTunnel.public_url);
            });
        });

        req.on('error', function (e) {
            reject(e.message);
        });

        req.end();
    });
};
