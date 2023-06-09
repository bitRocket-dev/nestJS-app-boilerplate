import { Injectable } from '@nestjs/common';

export interface TUser {
  id: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<TUser | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
