import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(count: number) {
    return this.http.get(`https://random-data-api.com/api/users/random_user?size=${ count }`);
  }
}
