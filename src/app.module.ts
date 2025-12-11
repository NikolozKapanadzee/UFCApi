import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FightersModule } from './fighters/fighters.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FightModule } from './fight/fight.module';

@Module({
  imports: [
    FightersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    FightModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
