//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { guardarPokemones } = require('./src/utils/guardarPokemones');
const { guardarTypes } = require('./src/utils/guardarTypes');
const { server } = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
const syncDB = async() => {
  try {
await conn.sync({ force: true }).then(() => { // poner en true para cargar la base de datos 
  server.listen(3001, () => {
    console.log('Server listening at 3001'); // eslint-disable-line no-console
  });
})  
await guardarPokemones();
await guardarTypes();
  } catch (error){
    console.log({error: error.message})
  }
}

syncDB();

// utilice una funcion async para sincronizar la base de datos con sequelize, de esta manera
// espera que termine la sincronizacion para ejecutar la funcion guardarPokemones() y guardarTypes(),
// las cuales se encargan de traerse todos los pokemones/types de la API y guardarlos en la DB.


