import { Module } from '@nestjs/common';
import { FightersService } from './fighters.service';
import { FightersController } from './fighters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fighter, FighterSchema } from './schema/fighter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: FighterSchema, name: Fighter.name }]),
  ],
  controllers: [FightersController],
  providers: [FightersService],
})
export class FightersModule {}
