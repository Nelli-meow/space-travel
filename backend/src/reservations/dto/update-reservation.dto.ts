import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class UpdateReservationDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  departure?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  guests?: number;
}