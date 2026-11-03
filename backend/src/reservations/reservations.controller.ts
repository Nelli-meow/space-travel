import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service.js';
import { CreateReservationDto } from './dto/reservation.dto.js';
import type { Reservation } from './types/reservation.js';
import { UpdateReservationDto } from './dto/update-reservation.dto.js';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateReservationDto): Reservation {
    return this.reservationsService.create(dto);
  }
  @Get()
  @HttpCode(200)
  findAll() : Reservation[] {
    return this.reservationsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Reservation {
    return this.reservationsService.findOne(id);
  }
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): void {
    this.reservationsService.remove(id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateReservationDto,
  ): Reservation {
    return this.reservationsService.update(id, dto);
  }
}