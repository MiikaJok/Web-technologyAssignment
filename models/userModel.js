'use strict';
const pool = require("../DB/db");
const promisePool = pool.promise();
const getAllUsers = async () => {
  try {
    const sql = `SELECT user_id, name, email FROM  wop_user`;
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    throw new Error('sql query failed');
  }
};
const getUserById = async (id) => {
  try {
    const sql = `SELECT user_id, name, email, role FROM wop_user WHERE user_id =?`;
    const [rows] = await promisePool.query(sql, [id]);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    throw new Error('sql query failed');
  }
};

const insertUser = async (user) => {
  console.log('insertUser', user)
  try {
    const sql = `INSERT INTO wop_user VALUES (null, ?, ?, ?, 1)`;
    const [rows] = await promisePool.query(sql, [
      user.name,
      user.email,
      user.passwd,
    ]);
    // console.log(rows);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    throw new Error('sql insert user failed');
  }
}
/*const modifyUser = async (user) => {
  try {
    const sql = 'UPDATE wop_user SET name=? WHERE user_id=?';
    const [rows] = await promisePool.query(sql, [user.name, user.user.id]);
    //console.log(rows);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    throw new Error('sql update user failed');
  }
}

const deleteUser = async (id) => {
  try {
    const sql = 'DELETE FROM wop_user WHERE user_id=?';
    const [rows] = await promisePool.query(sql, [id]);
    //console.log(rows);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    throw new Error('sql delete user failed');
  }
}*/
module.exports = {
  getAllUsers,
  getUserById,
  insertUser,
  //modifyUser,
  //deleteUser,
};
