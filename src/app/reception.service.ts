import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

import { CapteurEauModel } from './models/capteureau.model';
import { DonneesEauModel } from './models/donneesEau.model';
import { BoitierModel } from './models/boitier.model';

@Injectable()
export class ReceptionService {

  constructor(private httpClient: HttpClient) { }

  addDonneesEau(id: number, voltage, niveau_eau, vitesse, datetime, date, heure): Observable<DonneesEauModel> {
    const body = { voltage, niveau_eau, vitesse, datetime, date, heure };
    return this.httpClient.post<DonneesEauModel>(`${environment.baseUrl}/capteurs-eaus/${id}/donnees-eaus`, body);
  }

  getLastValueDonneesEau(id: number): Observable<DonneesEauModel> {
    return this.httpClient.get<DonneesEauModel>(`${environment.baseUrl}/capteurs-eaus/${id}/donnees-eaus?limit=1&sort=desc`);
  }

  getCapteurEau(id: number): Observable<CapteurEauModel> {
    return this.httpClient.get<CapteurEauModel>(`${environment.baseUrl}/capteurs-eaus/${id}`);
  }


  getBoitier(device_id: string): Observable<BoitierModel> {
    return this.httpClient.get<BoitierModel>(`${environment.baseUrl}/boitiers/deviceId/${device_id}`);
  }

}
