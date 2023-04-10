require('dotenv').config();
const app = require('./app');
require('./database');


/*************** execute server logic ***************/

async function main() {
    await app.listen(app.get('port'));
    console.log('Conexion exitosa');
}

main();