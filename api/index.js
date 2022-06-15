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
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Types } = require('./src/db');
const axios = require("axios");

const getPokemonsTypes = async () => {
  try {
      const typesUrl = await axios.get("https://pokeapi.co/api/v2/type");
      const types = typesUrl.data.results.map(e => {
        return {
          name: e.name,
        }
      })

      for (let i = 0; i < types.length; i++) {
          Types.findOrCreate({
            where: {name: types[i].name}
          })
      }

  } catch (error) {
      console.log(error);
  }
}


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    getPokemonsTypes();
  });
});
