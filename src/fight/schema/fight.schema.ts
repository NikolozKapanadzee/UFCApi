import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { FightResult } from 'src/enums/fightResult.enum';
import { WeightClass } from 'src/enums/weightClass.enum';

@Schema({ timestamps: true })
export class Fight {
  // eventId: string
  @Prop({ type: Types.ObjectId, ref: 'Fighter', required: true })
  fighter1Id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Fighter', required: true })
  fighter2Id: Types.ObjectId;

  @Prop({ required: true, enum: WeightClass })
  weightClass: WeightClass;

  @Prop({ type: Types.ObjectId, ref: 'Fighter' })
  winnerId?: Types.ObjectId;

  @Prop({ enum: FightResult })
  result?: FightResult;
}

export const FightSchema = SchemaFactory.createForClass(Fight);
