import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Fighter {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, unique: true })
  nickName?: string;

  @Prop({
    type: String,
    required: true,
    enum: ['male', 'female'],
  })
  gender: 'male' | 'female';

  @Prop({ type: String, required: true })
  nationality: string;

  @Prop({ type: Number, required: true })
  height: number;

  @Prop({ type: Number, required: true })
  weight: number;

  @Prop({ type: Date, required: true })
  dob: Date;

  @Prop({ type: String, required: true })
  weightClass: string;

  @Prop({ type: Number, required: true })
  wins: number;

  @Prop({ type: Number, required: true })
  losses: number;

  @Prop({ type: Number, required: true })
  draws: number;

  @Prop({ type: Number, required: true })
  ko: number;

  @Prop({ type: Number, required: true })
  submission: number;
}
export const FighterSchema = SchemaFactory.createForClass(Fighter);
