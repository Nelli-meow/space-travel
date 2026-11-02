import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  destinationSlug: string;

  @IsString()
  @IsNotEmpty()
  hotelSlug: string;

  @IsString()
  @IsNotEmpty()
  shipSlug: string;

  @IsString()
  @IsNotEmpty()
  departure: string;

  @IsInt()
  @Min(1)
  guests: number;
}