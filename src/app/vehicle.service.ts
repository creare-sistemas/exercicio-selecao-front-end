import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:8080/frota/api/v1/vehicles';

  constructor(private http: HttpClient) { }

  getVehicle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createVehicle(vehicle: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, vehicle);
  }

  updateVehicle(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getVehiclesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
