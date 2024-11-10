import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-suggetions',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './suggetions.component.html',
  styleUrls: ['./suggetions.component.css']
})
export class SuggetionsComponent {

  public comments = {
    description: "",
    localDate: "",
    localTime: ""
  };

  constructor(private http: HttpClient, private router: Router) {}

  public addSuggestion() {

    this.http.post("http://localhost:8080/suggestion/add-suggestions", this.comments).subscribe({
      next: (data) => {
        console.log(this.comments);
        alert("Comment Added Successfully!");
        this.router.navigate(['/popular']);
      },
      error: (error) => {
        console.error("Error:", error);
        alert("Failed to add comment. Please check the console for details.");
      }
    });
  }
}
