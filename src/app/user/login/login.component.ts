import { Component, OnInit } from '@angular/core';
import { RsaService } from '../../services/rsa.service';
import { AuthService, User } from '../../services/auth.service';
import * as Forge from 'node-forge';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private _rsa!: Forge.pki.rsa.PublicKey;
  constructor(
    private _rsaService: RsaService,
    private _authService: AuthService
  ) {}
  ngOnInit(): void {
    this._rsaService.rsa.subscribe((rsa) => (this._rsa = rsa));
    console.log(this._rsa);
  }

  login(
    email: string = 'nddnssd@gmail.com',
    passwd: string = 'Test1234='
  ): void {
    this._authService
      .login(email, this._rsaService.Encrypt(this._rsa, passwd))
      .subscribe((user) => console.log(user));
  }
}
