import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConferenceDetails } from '../conference-details/conference-details';

export interface Conference {
  id: number;
  title: string;
  description: string;
  date: Date;
  place: string;
  maxParticipants: number;
  nbParticipants: number;
}

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, UpperCasePipe, DatePipe, ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchText = '';
  selectedConference: Conference | null = null;

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 en pratique',
      description: 'Les nouveautés d’Angular 21 et le contrôle de flux natif.',
      date: new Date('2027-01-15'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 40,
    },
    {
      id: 2,
      title: 'Architecture micro-frontends',
      description: 'Découper une grande application en modules indépendants.',
      date: new Date('2027-02-10'),
      place: 'Sfax',
      maxParticipants: 50,
      nbParticipants: 45,
    },
    {
      id: 3,
      title: 'DevOps et CI/CD',
      description: 'Automatiser le build et le déploiement.',
      date: new Date('2027-03-05'),
      place: 'Sousse',
      maxParticipants: 30,
      nbParticipants: 30,
    },
    {
      id: 4,
      title: 'Conférence passée (ne doit pas apparaître)',
      description: 'Test du filtre sur les dates.',
      date: new Date('2026-01-10'),
      place: 'Tunis',
      maxParticipants: 80,
      nbParticipants: 20,
    },
  ];

  get filteredConferences(): Conference[] {
    const today = new Date();
    const search = this.searchText.trim().toLowerCase();

    return this.conferences.filter(
      (c) => c.date >= today && c.title.toLowerCase().includes(search)
    );
  }

  remainingPlaces(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  select(c: Conference) {
    this.selectedConference = c;
  }

  register(c: Conference) {
    if (this.remainingPlaces(c) > 0) {
      c.nbParticipants++;
    }
  }
}