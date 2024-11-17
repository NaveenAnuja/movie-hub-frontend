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
    id: "",
    name: "",
    email: "",
    password: ""
  };

  constructor(private http: HttpClient, private router: Router) { }

  public addUser() {

    if (this.user.password.length < 5) {
      alert("Password must be at least 5 characters long.");
      return;
    }

    this.http.get("http://localhost:8080/user/view-users").subscribe((data: any) => {
      const userList = data;

      const duplicateEmailUser = userList.find(
        (newUser: any) => newUser.email === this.user.email
      );

      if (duplicateEmailUser) {
        alert("This email is already registered. Please use a different email or log in.");
      } else {

        this.http.post("http://localhost:8080/user/add-user", this.user).subscribe(() => {
          this.saveData();
          alert("User Added Successfully !!!");
          this.router.navigate(['/popular']);
        });
      }
    });
  }

  public saveData() {
    this.http.get(`http://localhost:8080/user/search-by-email/${this.user.email}`).subscribe((data: any) => {
      localStorage.setItem("userData", JSON.stringify(data));
    });
  }
}
