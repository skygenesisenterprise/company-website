import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT || '5432', 10),
});

const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('PostgreSQL connected');
    client.release();
  } catch (error) {
    console.error('PostgreSQL connection failed:', error);
    process.exit(1);
  }
};

export { pool };
export default connectDB;