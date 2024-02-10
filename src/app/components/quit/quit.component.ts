import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quit',
  templateUrl: './quit.component.html',
  styleUrl: './quit.component.css',
})
export class QuitComponent {
  showModal!: boolean;
  response = new Subject<boolean>();

  openModal() {
    this.showModal = true;
  }

  onSelection($event: any) {
    this.showModal = false;
    if ($event === 'yes') {
      this.response.next(true);
    } else {
      this.response.next(false);
    }
  }
}
