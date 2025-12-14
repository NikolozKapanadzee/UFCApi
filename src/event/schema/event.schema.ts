import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Event {
  @Prop({
    type: String,
    required: true,
  })
  city: string;
  @Prop({
    type: String,
    required: true,
  })
  country: string;
  @Prop({
    type: Number,
    required: true,
  })
  price: number;
}
