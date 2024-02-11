import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-primeng-test',
  templateUrl: './primeng-test.component.html',
  styleUrl: './primeng-test.component.css',
})
export class PrimengTestComponent {
  constructor(private _authService: AuthService) {}
  setVisible(action: boolean) {
    console.log('dans le setVisible');

    this._authService.setVisible(action);
  }
}
