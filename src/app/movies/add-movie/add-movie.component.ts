import { MovieService } from './../../shared/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  form: FormGroup;
  movie_id: any;
  isSubmitted: boolean;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: MovieService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.movie_id = params['id'];
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [Math.random()],
      name: ['', Validators.required],
      date: ['', Validators.required],
      image: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });

    if (this.movie_id) this.getMovie();
  }

  getMovie() {
    this.service.getMovie(this.movie_id).subscribe(res => res && this.form.patchValue(res) )
    ;
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;
    if (this.movie_id)
    this.service
        .updateMovie(this.form.value)
        .subscribe(() => this.router.navigate(['/movies']));
    else
      this.service
        .addMovie(this.form.value)
        .subscribe(() => this.router.navigate(['/movies']));
  }
}
