import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public user: any = {
    name: "",
    email: "",
    password: ""
  };

  constructor(private http: HttpClient, private router: Router) { }

  public addUser() {
    this.http.post("http://localhost:8080/user/add-user", this.user).subscribe((data)=>{
      alert("User Added Successfully !!!");
      this.router.navigate(['/popular']);
    });
  }
  
}



