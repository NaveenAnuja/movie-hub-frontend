import { Component, Input } from '@angular/core';
import { tick } from '@angular/core/testing';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input()
  public movieInfo: any;

  viewMovie() {
    console.log("Opening movie link.");
    fetch(`http://api.themoviedb.org/3/search/movie?api_key=22fef8b9b249f83dc6e00ef1d70dd319&query=${this.movieInfo.id}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert("⭐ you can watch that movie here ⭐")
          window.open(`https://www.themoviedb.org/movie/${data.id}`, '_blank');
        } else {
          alert("Movie Not Found");
        }
      })
      .catch(error => {
        console.error(error);
        alert("An error occurred. Please try again later.");
      });
  }

  saveMovieInfo() {
    localStorage.setItem("selectedMovie", JSON.stringify(this.movieInfo.title));
  }

}
