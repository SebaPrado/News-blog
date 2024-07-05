/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 * En este ejemplo se están insertando 500 artículos con textos ficticios.
 *
 *
 */

//
// Hago lo mismo para users
// npm run seeders (chequear que en TablePlus se hayan agregado los usuarios, acordarse de refrescar!!)

const { fakerES: faker } = require("@faker-js/faker"); // requerimos faker 
const { User } = require("../models");  // requerimos 
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const users = [];

  let password = await bcrypt.hash("1234", 10); // esto creaba un hash en la DB

  for (let i = 0; i < 10; i++) {
    users.push({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: password,
      roleId: faker.number.int({ min: 1, max: 3 }),
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Usuarios.");
};
