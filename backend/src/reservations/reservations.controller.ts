import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ReservationsService } from './reservations.service.js';
import { CreateReservationDto } from './dto/reservation.dto.js';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateReservationDto): CreateReservationDto {
    return this.reservationsService.create(dto);
  }
}