import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlayerService {

  constructor(private _http: HttpClient) {}


  createPlayer(joueurData: any): Observable<any> {
    return this._http.post("joueurs", joueurData);
  }
  getPlayer(id:string): Observable<any> {
    return this._http.get(`joueurs/${id}`);
  }
  getAllPlayers(): Observable<any> {
    return this._http.get("joueurs");
  }
  updatePlayer(payload: any,id:string): Observable<any> {
    return this._http.put(`joueurs/${id}`,payload);
  }
  deletePlayer(id:string): Observable<any> {
    return this._http.delete(`joueurs/${id}`);
  }
}
