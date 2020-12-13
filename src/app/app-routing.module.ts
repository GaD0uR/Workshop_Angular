import { DetailMovieComponent } from './movies/detail-movie/detail-movie.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "movies/add", component : AddMovieComponent},
  { path: "movies/edit/:id", component : AddMovieComponent},
  { path: "movies/:id", component : DetailMovieComponent},
  { path: '', pathMatch: 'full', redirectTo: 'movies'},
   {
    path: 'movies',
    component: MoviesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
