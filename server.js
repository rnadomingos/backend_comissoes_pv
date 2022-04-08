const oracledb = require('oracledb');

async function run() {

    connection = await oracledb.getConnection({
        user: process.env.NODE_ORACLEDB_USER,
        password: process.env.NODE_ORACLEDB_PASSWORD,
        connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING
      });

      const result = await connection.execute(
        `select *from clientes c where c.cod_cliente = 32591960801`,
        [],
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
      const { metaData, row } = result;

      console.log(metaData);
}    

run();