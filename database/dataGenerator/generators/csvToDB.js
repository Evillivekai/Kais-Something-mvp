const pool = require('../../connect.js');
const path = require('path');

const csvFiles = [
  'coffee.csv',
  // 'users_coffee.csv',
];

csvFiles.forEach((file, index) => {
  let filePath = `G:\\Study\\Hack\ Reactor\\Visual\ Studio\\repo\\MVP\\Kais-Something-mvp\\database\\dataGenerator\\CSVfiles\\${file}`;
  const querys =[
    `COPY coffee_list (cof_name, cof_taste, cof_pic, cof_description) from '${filePath}' DELIMITER \',\' CSV HEADER`,
    // `COPY users_coffee (user_id, cof_id) from '${filePath}' DELIMITER \',\' CSV HEADER`,
  ];

  (async () => {
    const client = await pool.connect();
    try {
      await client.query(querys[index]);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } finally {
      client.release();
    }
  })();
})
