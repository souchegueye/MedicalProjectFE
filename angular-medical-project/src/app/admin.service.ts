import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<string> {
    const adminData = { username, password };
    return this.http.post<string>(`${this.apiUrl}/mgr/add`, adminData);
  }

  login(username: string, password: string): Observable<string> {
    const adminData = { username, password };
    return this.http.post<string>(`${this.apiUrl}/mgr/authenticate`, adminData);
  }
}
