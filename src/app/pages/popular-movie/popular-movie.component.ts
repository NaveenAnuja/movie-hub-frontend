import { NgFor } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-popular-movie',
  standalone: true,
  imports: [MovieItemComponent,NgFor,NavBarComponent],
  templateUrl: './popular-movie.component.html',
  styleUrl: './popular-movie.component.css'
})
export class PopularMovieComponent implements OnInit{

  public movieList: any = []

  ngOnInit(): void {
    this.loadMovieInfo();
  }

  private totalPages = 14;

  loadMovieInfo() {
    for (let page = 1; page <= this.totalPages; page++) {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=22fef8b9b249f83dc6e00ef1d70dd319&page=${page}`)
        .then(res => res.json())
        .then(data => {
          const filteredMovies = data.results.filter((movie: any) => movie.vote_average > 7.5);
          
          this.movieList = this.movieList.concat(filteredMovies);

          console.log(this.movieList); 
        })
        .catch(error => console.error(error));
    }
  }
}
