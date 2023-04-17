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
  try {
    const sql = 'INSERT INTO wop_user VALUES (null, ?, ?, ?, ?)';
    const values = [user.name, user.email, user.password, user.role];
    const [result] = await promisePool.query(sql, values);
    return result.insertId;
  } catch (e) {
    console.error('error', e.message);
    throw new Error('sql query failed');
  }
};

const getUserLogin = async (email) => {
  try {
    console.log("get use login for ", email);
    const [rows] = await promisePool.execute(
        'SELECT * FROM wop_user WHERE email = ?;',
        [email]);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const updateUser = async (user) => {
  try {
    const sql = 'UPDATE wop_user SET name=?, email=?, password=?, role=? WHERE user_id=?';
    const values = [user.name, user.email, user.passwd, user.role];
    const [result] = await promisePool.query(sql, values);
    return result.insertId;
  } catch (e) {
    console.error('error', e.message);
    throw new Error('sql query failed');
  }
};

/*const deleteUser = async (id) => {
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
  getUserLogin,
  updateUser,
  //deleteUser,
};
