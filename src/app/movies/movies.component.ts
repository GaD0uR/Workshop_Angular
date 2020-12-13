import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../shared/movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  search: string = '';
  movies: any[] = [];
  constructor(private service: MovieService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if(params['q'])
      this.search = params['q'];
      else
      this.search = ''

      this.getMovies();
      });
  }
  ngOnInit(): void {
  }

  getMovies() {
    this.service.getMovies().subscribe(res => {
      this.movies = res.filter(movie => movie.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
    });
  }

  removeMovie(id) {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}
