import { Component, input, output } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import type { Conference } from '../conference-list/conference-list';

@Component({
  selector: 'app-conference-details',
  imports: [NgClass, UpperCasePipe, DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  conference = input.required<Conference>();
  registered = output<Conference>();
  closed = output<void>();

  remainingPlaces(): number {
    const c = this.conference();
    return c.maxParticipants - c.nbParticipants;
  }

  onRegister() {
    this.registered.emit(this.conference());
  }

  onClose() {
    this.closed.emit();
  }
}