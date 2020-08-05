import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite') //dirname - retorna o diretorio q eu executo o arquivo dirname, no caso: database
  },
  useNullAsDefault: true, // qdo n defenir o conteudo, ele será nulo
});

export default db;