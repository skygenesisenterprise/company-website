import { Pool } from 'pg';

interface IUser {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

class UserModel {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await this.pool.query(query, [email]);
    return result.rows[0] || null;
  }

  async findByUsername(username: string): Promise<IUser | null> {
    const query = 'SELECT * FROM users WHERE username = $1';
    const result = await this.pool.query(query, [username]);
    return result.rows[0] || null;
  }

  async create(user: { username: string; email: string; password_hash: string; role?: string }): Promise<IUser> {
    const query = `
      INSERT INTO users (username, email, password_hash, role)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [user.username, user.email, user.password_hash, user.role || 'visitor'];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }
}

export default UserModel;