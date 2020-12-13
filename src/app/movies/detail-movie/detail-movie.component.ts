import { MovieService } from './../../shared/movie.service';
import { Movie } from './../../model/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css'],
})
export class DetailMovieComponent implements OnInit {
  movie: any = {};
  movie_id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: MovieService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.movie_id = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.movie_id) this.getMovie();
  }

  getMovie() {
    this.service.getMovie(this.movie_id).subscribe(res => this.movie = res);
  }

  removeMovie(id) {
    this.service.removeMovie(id).subscribe(res => this.router.navigate(['/movies']) );
  }
}
