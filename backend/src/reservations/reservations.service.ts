import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/reservation.dto.js';


@Injectable()
export class ReservationsService {
  create(dto: CreateReservationDto): CreateReservationDto {
    return dto;
  }
}