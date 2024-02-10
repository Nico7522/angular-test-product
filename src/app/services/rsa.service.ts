import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { PublicKey } from '../secret/Key.Model';
import * as Forge from 'node-forge';
import { FromBytesToString } from '../Utils/Utils';
import { AES } from 'crypto-ts';
import * as CryptoTS from 'crypto-ts';
@Injectable({
  providedIn: 'root',
})
export class RsaService {
  private _key: string = '';
  private _rsa!: Forge.pki.rsa.PublicKey;
  private _$rsa: BehaviorSubject<Forge.pki.rsa.PublicKey> =
    new BehaviorSubject<Forge.pki.rsa.PublicKey>(this._rsa);
  rsa = this._$rsa.asObservable();
  constructor(private _httpClient: HttpClient) {}

  Encrypt(key: Forge.pki.rsa.PublicKey, value: string): string {
    return window.btoa(
      key.encrypt(value.toString(), 'RSA-OAEP', {
        md: Forge.md['sha512'].create(),
      })
    );
  }
  getKey(): Observable<PublicKey> {
    return this._httpClient
      .get<PublicKey>('https://localhost:7273/api/Security/Security')
      .pipe(
        map((response) => {
          // const decryptedKey = FromBytesToString(response.publicKey);
          let decodedKey = atob(response.publicKey);
          this._key = decodedKey;
          this._rsa = Forge.pki.publicKeyFromPem(this._key);
          this._$rsa.next(this._rsa);
          console.log(this._rsa);
          return response;
        })
      );
  }
}
