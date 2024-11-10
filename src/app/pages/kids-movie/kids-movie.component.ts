import { Component, OnInit } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { NgFor } from '@angular/common';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-kids-movie',
  standalone: true,
  imports: [MovieItemComponent,NgFor,NavBarComponent],
  templateUrl: './kids-movie.component.html',
  styleUrl: './kids-movie.component.css'
})
export class KidsMovieComponent implements OnInit{

  public movieList: any = []

  ngOnInit(): void {
    this.loadMovieInfo();
  }

  private totalPages = 25;

  loadMovieInfo() {
    for (let page = 8; page <= this.totalPages; page++) {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=22fef8b9b249f83dc6e00ef1d70dd319&page=${page}`)
        .then(res => res.json())
        .then(data => {

          const filteredMovies = data.results.filter((movie:any) => movie.genre_ids.includes(10751) && movie.vote_average > 5.0);
          this.movieList = this.movieList.concat(filteredMovies);
          console.log(this.movieList); 
        })
        .catch(error => console.error(error));
    }
  }

}
