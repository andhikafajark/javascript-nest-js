import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  getOne(userId: number) {
    return this.usersRepository.findOneBy({ id: userId });
  }

  getOneByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.usersRepository.update({ id: userId }, updateUserDto);
  }

  delete(userId: number) {
    return this.usersRepository.delete({ id: userId });
  }
}
