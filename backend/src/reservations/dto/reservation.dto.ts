import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  destinationSlug: string;

  @IsString()
  @IsNotEmpty()
  hospitalSlug: string;

  @IsString()
  @IsNotEmpty()
  shipSlug: string;

  @IsString()
  @IsNotEmpty()
  departure: string;

  @IsInt()
  @Min(1)
  guests: number;

  // hotelSlug, shipSlug и departure — те же два декоратора
}