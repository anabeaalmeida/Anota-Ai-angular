const http = require('http');
const app = require('./backend/app-mongo')
const porta = process.env.PORT || 4000;

app.set('port', porta);

const server = http.createServer(app);


server.listen(porta);
