import { Component } from '@angular/core';
import { RsaService } from '../services/rsa.service';
import * as Forge from 'node-forge';

import { PublicKey } from './Key.Model';
import { FromBytesToString } from '../Utils/Utils';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrl: './secret.component.css',
})
export class SecretComponent {
  private _key: string = '';
  private _rsa!: Forge.pki.rsa.PublicKey;
  constructor(
    private _rsaService: RsaService,
    private _authService: AuthService
  ) {}

  getKey() {
    this._rsaService.getKey().subscribe();
  }
}
