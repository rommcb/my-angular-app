import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestHttpServiceService {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getStuff(): Observable<any> {
    return this.httpClient.get(environment.apiBaseURL);
  }
}
