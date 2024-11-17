import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editform',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './editform.component.html',
  styleUrl: './editform.component.css'
})
export class EditformComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  public userData: any;

  public data = {
    id: "",
    name: "",
    email: "",
    password: ""
  };

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("userData") || '{}');
    this.data = this.userData;
    console.log(this.userData);
  }

  public updateUsers() {

    if (this.data.password.length < 5) {
      alert("Password must be at least 5 characters long.");
      return;
    }

    this.http.put("http://localhost:8080/user/update-user", this.data).subscribe(() => {
      localStorage.setItem("userData", JSON.stringify(this.data));
      alert("User Updated Successfully!");
      this.router.navigate(['/popular']);
    });
  }

}

