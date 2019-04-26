import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayerService {
  public url: string = 'assets/county.json'
  constructor(private http: HttpClient) { }
  public getGeoJsonLayer(){
    return this.http.get(this.url);
  }
}
