const dbPool = require("../config/database");

// Digunakan untuk hal yang berbau database
// biasanya penamaan filenya sesuai dengan table di databasenya
const getAllUsers = () => {
  const sqlQuery = "SELECT * FROM users";

  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllUsers,
};
