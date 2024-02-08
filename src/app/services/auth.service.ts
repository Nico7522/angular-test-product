import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RsaService } from './rsa.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _httpClient: HttpClient,
    private _rsaService: RsaService
  ) {}

  login(email: string, passwd: string): Observable<User> {
    return this._httpClient.post<User>(
      'https://localhost:7273/api/Auth/Login',
      {
        email,
        passwd,
      }
    );
  }

  register(utilisateur: User) {
    return this._httpClient.post('https://localhost:7273/api/Auth/Register', {
      ...utilisateur,
    });
  }
}

export interface User {
  nom: string;
  prenom: string;
  email: string;
  passwd: string;
}
