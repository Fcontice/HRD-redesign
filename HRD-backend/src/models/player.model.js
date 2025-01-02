const pool = require('../config/database');

class Player {
  static async create({ name, homeRuns = 0 }) {
    const query = `
      INSERT INTO players (name, home_runs)
      VALUES ($1, $2)
      RETURNING id, name, home_runs, created_at
    `;
    
    const { rows } = await pool.query(query, [name, homeRuns]);
    return rows[0];
  }

  static async updateHomeRuns(playerId, homeRuns) {
    const query = `
      UPDATE players
      SET home_runs = $2
      WHERE id = $1
      RETURNING id, name, home_runs
    `;
    
    const { rows } = await pool.query(query, [playerId, homeRuns]);
    if (rows.length === 0) {
      throw new Error('Player not found');
    }
    return rows[0];
  }

  static async getById(playerId) {
    const query = 'SELECT * FROM players WHERE id = $1';
    const { rows } = await pool.query(query, [playerId]);
    return rows[0];
  }

  static async getAll() {
    const query = 'SELECT * FROM players ORDER BY home_runs DESC';
    const { rows } = await pool.query(query);
    return rows;
  }
}

module.exports = Player;
