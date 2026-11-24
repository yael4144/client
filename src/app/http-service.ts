import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Service()
export class HttpService {
 constructor(private http: HttpClient) { }
 
getSomthing(): Observable<any> {
    return this.http.get<any>("https://localhost:7226/WeatherForecast");
  }
}
