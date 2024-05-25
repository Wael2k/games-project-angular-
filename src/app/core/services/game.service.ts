import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private _http: HttpClient) {}

  createGame(payload: any): Observable<any> {
    return this._http.post("games", payload);
  }
  getGame(id:string): Observable<any> {
    return this._http.get(`games/${id}`);
  }
  getAllGames(): Observable<any> {
    return this._http.get(`games`);
  }
  updateGame(payload: any,id:string): Observable<any> {
    return this._http.put(`games/${id}`,payload);
  }
  deleteGame(id:string): Observable<any> {
    return this._http.delete(`games/${id}`);
  }
}
