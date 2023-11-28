// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Ajusta la URL del servidor

  constructor(private http: HttpClient) {}

  login(usuario: string, contrasena: string) {
    const url = `${this.apiUrl}/login`;
    const body = { usuario, contrasena };

    return this.http.post(url, body);
  }
}
