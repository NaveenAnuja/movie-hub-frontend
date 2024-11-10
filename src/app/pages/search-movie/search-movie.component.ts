import { Component, OnInit } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-search-movie',
  standalone: true,
  imports: [MovieItemComponent, NgFor, FormsModule, NavBarComponent],
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  movieName: string = '';
  movieList: any[] = [];

  searchMovie() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=22fef8b9b249f83dc6e00ef1d70dd319&query=${this.movieName}`)
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          this.movieList = data.results;
        } else {
          alert("Movie Not Found");
          this.movieList = [];
        }
      })
      .catch(error => {
        console.error(error);
        alert("An error occurred. Please try again later.");
      });
  }

}

