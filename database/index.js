const pool = require('./connect.js');
pool.connect();

const getAllCoffee = (callback) => {
  pool.query('SELECT * FROM coffee_list;', (error, results) => {
    if (error) {
      throw error;
    }
    // console.log(results);
    callback(null, results.rows);
  });
};

const checkOneUserColl = (id, callback) => {
  const querys = `SELECT uc.cof_id FROM users_coffee uc where uc.cof_id = ${id};`
  pool.query(querys, (error, data) => {
    if ( error ) {
      throw error;
    } else {
      callback(data.rows);
    }
  });
}

const getUserColl = (id, callback) => {
  const querys = `SELECT u.id, c.* FROM users u INNER JOIN users_coffee uc ON u.id = ${id} and u.id = uc.user_id INNER JOIN coffee_list c on uc.cof_id = c.id;`
  pool.query(querys, (error, data) => {
    error ? console.error(error) : callback(null, data.rows);
  });
};

const updateUserColl = (id, data) => {
  const querys = `UPDATE users_coffee SET cof_id=? where user_id = ${id};`;
  pool.query(query, [data], (error) => {
    error ? console.error(error) : true;
  });
};

const insertUserColl = (id, callback) => {
  const querys = `INSERT INTO users_coffee (user_id, cof_id) VALUES (1, ${id});`;
  pool.query(querys, (error) => {
    error ? console.error(error) : callback(null, 'Success');
  })
}

const deleteUserColl = (id, callback) => {
  const querys = `DELETE FROM users_coffee uc WHERE uc.cof_id = ${id};`;
  pool.query(querys, (error) => {
    error ? console.error(error) : callback(null, 'Success');
  })
}

module.exports= {
  getAllCoffee,
  getUserColl,
  deleteUserColl,
  insertUserColl,
  updateUserColl,
  checkOneUserColl,
};
