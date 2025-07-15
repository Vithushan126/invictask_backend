import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';

interface User {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  private users: User[] = []; // Explicitly type the users array

  constructor(private jwtService: JwtService) {}

  async register(registerDto: RegisterDto) {
    const { username, password } = registerDto;

    // Check if user already exists
    const userExists = this.users.find((user) => user.username === username);
    if (userExists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: User = { username, password: hashedPassword }; // Type the newUser
    this.users.push(newUser);

    return { message: 'User registered successfully' };
  }

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;

    const user = this.users.find((user) => user.username === username);
    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new Error('Invalid credentials');
    }

    const payload = { username: user.username };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
