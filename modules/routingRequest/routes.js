const fs = require('fs');
const qs = require('querystring');

const routeHandler = (req, res) => {
    const url = req.url; //url from the user request
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');
    if(url === '/') {
        res.write(`
            <html>
                <head>
                    <title>Enter Message</title>
                </head>
                <body>
                    <h1>Type your message...</h1>
                    <form action="/log" method="POST">
                        <input type="text" name="message">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }
    if(url === '/log' && method === 'POST') {

        //body parsing (bodyParser)
        req.on('data', (chunk) => {
            const body = Buffer.concat([chunk]).toString();
            console.log(body);
            const message = body.split('=')[1];
            console.log(qs.parse(body));
            fs.appendFileSync('message.txt', '\n' + message);
        });

        res.statusCode = 302; //redirect
        res.setHeader('Location', '/'); //redirect to the root
        return res.end();
    }
}

module.exports = routeHandler;