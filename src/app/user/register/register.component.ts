import { Component } from '@angular/core';
import { RsaService } from '../../services/rsa.service';
import { AuthService, User } from '../../services/auth.service';
import * as Forge from 'node-forge';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private _rsa!: Forge.pki.rsa.PublicKey;
  constructor(
    private _rsaService: RsaService,
    private _authService: AuthService
  ) {}
  ngOnInit(): void {
    this._rsaService.rsa.subscribe((rsa) => (this._rsa = rsa));
    console.log(this._rsa);
  }
  register() {
    const utilisateur: User = {
      nom: 'dd',
      prenom: 'ee',
      email: 'nddnssd@gmail.com',
      passwd: this._rsaService.Encrypt(this._rsa, 'Test1234='),
    };
    this._authService.register(utilisateur).subscribe({
      next: (isSuccess) => console.log(isSuccess),
    });
  }
}
