const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'chatbot_database',
  password: 'sharon@aracena',
  port: 5432,
});

//get all users from the database
const getUsers = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM users", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

//create a new user record in the databsse
const createUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { ip_address } = body;
    pool.query(
      "INSERT INTO users (ip_address) VALUES ($1) RETURNING *",
      [ip_address],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new user has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};

//delete a user
const deleteUser = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM users WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`User deleted with ID: ${id}`);
      }
    );
  });
};

//update a user record
const updateUser = (id, body) => {
  return new Promise(function (resolve, reject) {
    const { ip_address } = body;
    pool.query(
      "UPDATE users SET ip_address = $1 WHERE id = $2 RETURNING *",
      [ip_address, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`Merchant updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};

// get all questions of a particular user
const getQuestions = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      const {ip_address} = body;
      pool.query("SELECT * FROM questions WHERE ip_address = $1", 
      [ip_address],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

//create a new question record in the databsse
const createQuestion = (body) => {
  return new Promise(function (resolve, reject) {
    const { time, question, response, ip_address } = body;
    pool.query(
      "INSERT INTO questions (time, question, response, ip_address) VALUES ($1, $2, $3, $4) RETURNING *",
      [time, question, response, ip_address],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new question has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getQuestions,
  createQuestion
};
