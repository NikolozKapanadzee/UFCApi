import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Fighter } from './schema/fighter.schema';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class FightersService {
  constructor(
    @InjectModel(Fighter.name) private fighterModel: Model<Fighter>,
  ) {}
  async create(createFighterDto: CreateFighterDto) {
    const newFighter = await this.fighterModel.create(createFighterDto);
    return {
      message: 'fighter created successfully',
      data: newFighter,
    };
  }
  async findAll() {
    const fighters = await this.fighterModel.find();
    return fighters;
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const fighter = await this.fighterModel.findById(id);
    if (!fighter) {
      throw new NotFoundException('fighter can not be found');
    }
    return fighter;
  }

  async update(id: string, updateFighterDto: UpdateFighterDto) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const updatedFighter = await this.fighterModel.findByIdAndUpdate(
      id,
      updateFighterDto,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!updatedFighter) {
      throw new NotFoundException('fighter can not be found');
    }
    return {
      message: 'fighter updated successfully',
      data: updatedFighter,
    };
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    const deletedFighter = await this.fighterModel.findByIdAndDelete(id);
    if (!deletedFighter) {
      throw new NotFoundException('fighter can not be found');
    }
    return {
      message: 'fighter deleted successfully',
      data: deletedFighter,
    };
  }
}
