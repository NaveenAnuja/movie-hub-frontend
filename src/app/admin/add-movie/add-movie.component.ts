import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

  constructor(private http: HttpClient, private router: Router) { }

  public movie = {
    name: "",
    description: "",
    rate: "",
    category: ""
  }

  public addMovie() {

    this.http.get("http://localhost:8080/movie/view-movies").subscribe((data: any) => {
      const movieList = data;

      const duplicateMovie = movieList.find(
        (newMovie: any) => (newMovie.description === this.movie.description || newMovie.name === this.movie.name)
      );

      if (duplicateMovie) {
        alert("This Movie is already added. Please add a different movie !");
        this.clearFields();
      } else {

        this.http.post("http://localhost:8080/movie/add-movie", this.movie).subscribe((data) => {
          alert("Movie Added Successfully !!!");
          this.router.navigate(['/movie']);
        });
      }
    })
  }

  private clearFields(){
    this.movie.name="";
        this.movie.description="";
        this.movie.rate="";
        this.movie.category="";
  }
}
