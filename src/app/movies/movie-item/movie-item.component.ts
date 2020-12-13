import { MovieService } from './../../shared/movie.service';
import { Movie } from './../../model/movie';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Output() deleteMovie: EventEmitter<any> = new EventEmitter();
  @Input() movie : Movie
  constructor(private service: MovieService) { }

  ngOnInit(): void {
  }

  removeMovie(id) {
    this.service.removeMovie(id).subscribe(res => this.deleteMovie.emit(id));
  }
}
