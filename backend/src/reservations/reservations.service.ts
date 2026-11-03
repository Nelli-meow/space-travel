import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/reservation.dto.js';
import { Reservation } from './types/reservation.js';


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
    return this.reservations;
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
}