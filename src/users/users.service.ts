/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPost, UserPut } from './dtos';
import { User } from './entities';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) throw new NotFoundException();
    return user;
  }

  async addUser(dto: UserPost): Promise<User> {
    try {
      const user = this.userRepository.create(dto);
      return await this.userRepository.save(user);
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async updateUser(id: number, dto: UserPut): Promise<User> {
    try {
      const user = await this.userRepository.findOneBy({ id: id });
      if (!user) throw new NotFoundException();
      const updatedUser = Object.assign(user, dto);
      return await this.userRepository.save(updatedUser);
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async deleteUser(id: number) {
    return await this.userRepository.delete(id);
  }

  async getUserByAccount(email: string, password: string): Promise<User> {
    return await this.userRepository.findOneBy({
      email: email,
      password: password,
    });
  }
}
