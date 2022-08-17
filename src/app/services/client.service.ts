import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../interfaces/iclient';
import { IOpportunity } from '../interfaces/iopportunity';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl: string = 'http://localhost:3000/client';
  constructor(private http: HttpClient) {}

  getAll(): Observable<IClient[]> {
    const data = this.http.get<IClient[]>(this.apiUrl);
    return data;
  }

  getClient(id: string) {
    const data = this.http.get<IClient>(`${this.apiUrl}/${id}`);
    return data;
  }
  setOpportunities(id: string, body: IOpportunity[]) {
    const data = this.http.post<IOpportunity[]>(`${this.apiUrl}/${id}`, body);
    return data;
  }
}
