import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:3307/api/v1/clients";

  constructor(private httpClient : HttpClient) { }

  getListClients():Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseURL}`)
  }

  registerClient(client:Client) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,client);
  }

  updateClient(id:number,client:Client): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,client)
  }

  getClientById(id:number): Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseURL}/${id}`)
  }


}
