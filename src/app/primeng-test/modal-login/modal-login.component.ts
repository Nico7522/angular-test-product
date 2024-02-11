import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.css',
})
export class ModalLoginComponent implements OnInit {
  visible: boolean = true;
  constructor(private _authSerice: AuthService) {}
  ngOnInit(): void {
    console.log(this.visible);
    this._authSerice.$visible.subscribe((status) => (this.visible = status));
  }

  setVisible() {
    this._authSerice.setVisible(false);
  }
}
