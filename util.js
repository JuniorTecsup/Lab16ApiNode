const util = require('util');

async function fn() {
  return 'Hola...Alfredo Vilchez Ramos';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
