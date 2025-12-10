import { Injectable } from '@nestjs/common';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Fighter } from './schema/fighter.schema';
import { Model } from 'mongoose';

@Injectable()
export class FightersService {
  constructor(
    @InjectModel(Fighter.name) private fighterModel: Model<Fighter>,
  ) {}
  create(createFighterDto: CreateFighterDto) {}

  findAll() {
    return `This action returns all fighters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fighter`;
  }

  update(id: number, updateFighterDto: UpdateFighterDto) {
    return `This action updates a #${id} fighter`;
  }

  remove(id: number) {
    return `This action removes a #${id} fighter`;
  }
}
