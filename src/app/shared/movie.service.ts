import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = "http://localhost:3000/movies";

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<any>(this.url);
  }

  getMovie(id) {
    return this.http.get<any>(this.url + `/` + id);
  }

  addMovie(movie) {
    return this.http.post<any>(this.url, movie);
  }

  updateMovie(movie) {
    return this.http.put<any>(this.url + `/` + movie.id, movie);
  }

  removeMovie(id: string) {
    return this.http.delete<any>(this.url + `/` + id);
  }
}
