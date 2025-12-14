import { IsEnum, IsMongoId } from 'class-validator';
import { WeightClass } from 'src/enums/weightClass.enum';

export class CreateFightDto {
  @IsMongoId()
  eventId: string;
  @IsMongoId()
  fighter1Id: string;
  @IsMongoId()
  fighter2Id: string;
  @IsEnum(WeightClass)
  weightClass: WeightClass;
}
