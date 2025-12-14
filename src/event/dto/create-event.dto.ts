import { Type } from 'class-transformer';
import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEventDto {
  @IsMongoId()
  @IsNotEmpty()
  eventId: string;
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  eventDate: Date;
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @IsNotEmpty()
  city: string;
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @IsNotEmpty()
  country: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
