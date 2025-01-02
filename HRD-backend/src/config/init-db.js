const fs = require('fs');
const path = require('path');
const pool = require('./database');

async function initializeDatabase() {
  try {
    // Read the schema file
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    // Execute the schema
    await pool.query(schema);
    console.log('Database schema initialized successfully');

    // Optional: Add some initial data for testing
    // await addTestData();

  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

// Optional: Function to add test data
async function addTestData() {
  try {
    // Add a test user
    const userResult = await pool.query(`
      INSERT INTO users (username, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id
    `, ['testuser', 'test@example.com', '$2b$10$testhashedpassword']);
    
    const userId = userResult.rows[0].id;

    // Add some test players
    const playerResult = await pool.query(`
      INSERT INTO players (name, home_runs)
      VALUES 
        ('Aaron Judge', 62),
        ('Pete Alonso', 40),
        ('Mike Trout', 40),
        ('Shohei Ohtani', 44),
        ('Juan Soto', 35),
        ('Mookie Betts', 35),
        ('Ronald Acuña Jr.', 41),
        ('Matt Olson', 54)
      RETURNING id, name
    `);

    // Create a test team
    const teamResult = await pool.query(`
      INSERT INTO teams (name, user_id)
      VALUES ($1, $2)
      RETURNING id
    `, ['Test Team', userId]);
    
    const teamId = teamResult.rows[0].id;

    // Add players to the team
    for (const player of playerResult.rows) {
      await pool.query(`
        INSERT INTO team_players (team_id, player_id)
        VALUES ($1, $2)
      `, [teamId, player.id]);
    }

    console.log('Test data added successfully');
  } catch (error) {
    console.error('Error adding test data:', error);
    throw error;
  }
}

// Export the initialization function
module.exports = initializeDatabase;
