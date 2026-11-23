import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifList = [
    { id: 1, message: 'Une nouvelle conférence est disponible.' },
    { id: 2, message: 'Sami vous a envoyé une invitation.' },
    { id: 3, message: 'Votre profil a été mis à jour.' },
  ];

  show = false;
  btnText = 'Afficher les notifications';

  showNotifications() {
    this.show = !this.show;
    this.btnText = this.show ? 'Masquer les notifications' : 'Afficher les notifications';
  }
}