import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  [x: string]: any;
  getItems(params: { page: number; per_page: number; }) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  searchRepositories(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/repositories?q=${query}`;
    return this.http.get(url);
  }

  searchUsers(term: string): Observable<any> {
    const url = `${this.apiUrl}/search/users?q=${term}`;
    return this.http.get(url);
  }
}