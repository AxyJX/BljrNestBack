import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectEntityManager() private readonly entityManager: EntityManager) {}

  async findAll(): Promise<User[]> {
    return await this.entityManager.find(User);
  }

  async findOne(id: number): Promise<User> {
    return await this.entityManager.findOne(User, { where: { id } });
  }

  async createUser(user: User): Promise<User> {
    return await this.entityManager.save(User, user);
  }
}
