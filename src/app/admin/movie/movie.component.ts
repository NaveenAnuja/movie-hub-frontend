import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieItemComponent } from '../../pages/movie-item/movie-item.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [NgFor,MovieItemComponent,RouterLink,FormsModule,HttpClientModule,CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{

  ngOnInit(): void {
      this.loadMovieInfo();
  }

  public movieId: String='';
  public movieList: any = []

  constructor(private http:HttpClient){}

  public loadMovieInfo() {
    this.http.get("http://localhost:8080/movie/view-movies").subscribe((data=>{
      this.movieList=data;
    }));
  }

  public searchMovieById() {
   this.http.get(`http://localhost:8080/movie/search-by-id/${this.movieId}`).subscribe((data=>{
    if(data){
      this.movieList=[data];
      this.movieId='';
    }else{
    alert(`Movie is not found in id: ${this.movieId}`);
    this.loadMovieInfo();
    this.movieId='';
    }
   }))
  }

  public searchMovieByName() {
    this.http.get(`http://localhost:8080/movie/search-by-name/${this.movieId}`).subscribe((data=>{
     if(data){
       this.movieList=[data];
       this.movieId='';
     }else{
     alert(`Movie is not found in name: ${this.movieId}`);
     this.loadMovieInfo();
     this.movieId='';
     }
    }))
   }
  
  public deleteMovie(id: any) {
    this.http.delete(`http://localhost:8080/movie/delete-movie/${id}`).subscribe(() => {
      alert("Movie Deleted Successfully!");
      this.loadMovieInfo();
    });
  }

}
