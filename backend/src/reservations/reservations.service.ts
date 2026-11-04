import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/reservation.dto.js';
import { Reservation } from './types/reservation.js';
import { UpdateReservationDto } from './dto/update-reservation.dto.js';


@Injectable()
export class ReservationsService {
  private readonly reservations: Reservation[] = [];

  create(dto: CreateReservationDto): Reservation {
    const reservation = {
      id: crypto.randomUUID(),
      ...dto,
    }

    this.reservations.push(reservation);
    return reservation;
  }
  findAll(): Reservation[] {
    return [...this.reservations].reverse();
  }
  findOne(id: string): Reservation {
    const oneReservation = this.reservations.find(item => item.id === id);

    if (!oneReservation) {
      throw new NotFoundException('Reservation not found');
    }

    return oneReservation;
  }
  remove(id: string): void {
    const oneReservation = this.reservations.find(item => item.id === id);
    if (!oneReservation) {
      throw new NotFoundException('Reservation not found');
    }

    this.reservations.splice(this.reservations.indexOf(oneReservation), 1);
  }
  update(id: string, dto: UpdateReservationDto): Reservation {
    const oneRes = this.findOne(id);

    if(dto.departure !== undefined) {
      oneRes.departure = dto.departure;
    }

    if (dto.guests !== undefined) {
      oneRes.guests = dto.guests;
    }

    return oneRes;
  }
}