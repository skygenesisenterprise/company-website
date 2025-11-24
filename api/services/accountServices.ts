
import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export interface CreateAccountData {
  email: string;
  username?: string;
  password: string;
  fullName?: string;
  profile?: {
    firstName?: string;
    lastName?: string;
  };
}

export interface AuthenticateData {
  identifier: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  idToken?: string;
}

export interface AuthResponse {
  account: User;
  tokens: AuthTokens;
  memberships: unknown[];
}

class AccountService {
  async authenticate(data: AuthenticateData): Promise<AuthResponse> {
    const { identifier, password } = data;

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { username: identifier }
        ]
      }
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (user.status !== 'ACTIVE') {
      throw new Error('Account is not active');
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash || '');
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const tokens = this.generateTokens(user);

    return {
      account: user,
      tokens,
      memberships: []
    };
  }

  async register(data: CreateAccountData): Promise<AuthResponse> {
    const { email, username, password, fullName, profile } = data;

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          ...(username ? [{ username }] : [])
        ]
      }
    });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new Error('Email already exists');
      }
      if (existingUser.username === username) {
        throw new Error('Username already exists');
      }
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        username: username || email.split('@')[0],
        firstName: profile?.firstName || fullName?.split(' ')[0],
        lastName: profile?.lastName || fullName?.split(' ').slice(1).join(' '),
        passwordHash,
        role: 'USER',
        status: 'ACTIVE'
      }
    });

    const tokens = this.generateTokens(user);

    return {
      account: user,
      tokens,
      memberships: []
    };
  }

  private generateTokens(user: User): AuthTokens {
    const jwtSecret = process.env.JWT_SECRET || 'fallback-secret-key';
    const refreshSecret = process.env.JWT_REFRESH_SECRET || 'fallback-refresh-secret';

    const accessToken = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        username: user.username,
        role: user.role 
      },
      jwtSecret,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { 
        id: user.id, 
        email: user.email 
      },
      refreshSecret,
      { expiresIn: '7d' }
    );

    const idToken = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role 
      },
      jwtSecret,
      { expiresIn: '1h' }
    );

    return {
      accessToken,
      refreshToken,
      idToken
    };
  }

  async refreshToken(refreshTokenString: string): Promise<AuthTokens> {
    const refreshSecret = process.env.JWT_REFRESH_SECRET || 'fallback-refresh-secret';

    try {
      const decoded = jwt.verify(refreshTokenString, refreshSecret) as { id: string; email: string };
      
      const user = await prisma.user.findUnique({
        where: { id: decoded.id }
      });

      if (!user || user.status !== 'ACTIVE') {
        throw new Error('Invalid refresh token');
      }

      return this.generateTokens(user);
    } catch {
      throw new Error('Invalid refresh token');
    }
  }

  async getUserById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id }
    });
  }
}

const accountService = new AccountService();
export default accountService;