import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsEnum,
  IsDateString,
} from 'class-validator';

export class CreateFighterDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  nickName?: string;

  @IsEnum(['male', 'female'])
  gender: 'male' | 'female';

  @IsString()
  @IsNotEmpty()
  nationality: string;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @IsDateString()
  @IsNotEmpty()
  dob: string;

  @IsString()
  @IsNotEmpty()
  weightClass: string;

  @IsNumber()
  @IsNotEmpty()
  wins: number;

  @IsNumber()
  @IsNotEmpty()
  losses: number;

  @IsNumber()
  @IsNotEmpty()
  draws: number;

  @IsNumber()
  @IsNotEmpty()
  ko: number;

  @IsNumber()
  @IsNotEmpty()
  submission: number;
}
