import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RsaService } from './rsa.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _httpClient: HttpClient,
    private _rsaService: RsaService
  ) {}

  private _visible = new BehaviorSubject<boolean>(false);
  $visible = this._visible.asObservable();
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

  setVisible(action: boolean) {
    this._visible.next(action);
  }
}

export interface User {
  nom: string;
  prenom: string;
  email: string;
  passwd: string;
}
