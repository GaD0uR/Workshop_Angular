import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { DetailMovieComponent } from './movies/detail-movie/detail-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    MovieItemComponent,
    AddMovieComponent,
    DetailMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    HttpClient,
    FormBuilder,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
