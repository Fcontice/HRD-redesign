const pool = require('../config/database');
const bcrypt = require('bcrypt');

class User {
  static async create({ username, email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO users (username, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, username, email, created_at
    `;
    
    try {
      const { rows } = await pool.query(query, [username, email, hashedPassword]);
      return rows[0];
    } catch (error) {
      if (error.code === '23505') { // unique violation
        throw new Error('Username or email already exists');
      }
      throw error;
    }
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    return rows[0];
  }

  static async validatePassword(user, password) {
    return bcrypt.compare(password, user.password_hash);
  }
}

module.exports = User;
