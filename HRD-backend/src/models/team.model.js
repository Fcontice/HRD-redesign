const pool = require('../config/database');

class Team {
  static async create({ name, userId }) {
    const query = `
      INSERT INTO teams (name, user_id)
      VALUES ($1, $2)
      RETURNING id, name, user_id, total_home_runs, created_at
    `;
    
    try {
      const { rows } = await pool.query(query, [name, userId]);
      return rows[0];
    } catch (error) {
      if (error.code === '23505') {
        throw new Error('Team name already exists for this user');
      }
      throw error;
    }
  }

  static async addPlayer(teamId, playerId) {
    const query = `
      INSERT INTO team_players (team_id, player_id)
      VALUES ($1, $2)
      RETURNING team_id, player_id
    `;
    
    try {
      const { rows } = await pool.query(query, [teamId, playerId]);
      return rows[0];
    } catch (error) {
      if (error.message.includes('Teams cannot have more than 8 players')) {
        throw new Error('Team already has maximum number of players (8)');
      }
      throw error;
    }
  }

  static async getTeamsByUserId(userId) {
    const query = `
      SELECT t.*, 
             array_agg(json_build_object('id', p.id, 'name', p.name, 'home_runs', p.home_runs)) as players
      FROM teams t
      LEFT JOIN team_players tp ON t.id = tp.team_id
      LEFT JOIN players p ON tp.player_id = p.id
      WHERE t.user_id = $1
      GROUP BY t.id
      ORDER BY t.total_home_runs DESC
    `;
    
    const { rows } = await pool.query(query, [userId]);
    return rows;
  }

  static async updateTotalHomeRuns(teamId) {
    const query = `
      UPDATE teams t
      SET total_home_runs = (
        SELECT COALESCE(SUM(p.home_runs), 0)
        FROM team_players tp
        JOIN players p ON tp.player_id = p.id
        WHERE tp.team_id = $1
      )
      WHERE t.id = $1
      RETURNING total_home_runs
    `;
    
    const { rows } = await pool.query(query, [teamId]);
    return rows[0];
  }
}

module.exports = Team;
