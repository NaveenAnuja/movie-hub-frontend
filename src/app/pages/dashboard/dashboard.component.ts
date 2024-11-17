import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  ngOnInit(): void {
      this.saveData();
  }

  public userDetails = {
    email: '',
    password: ''
  };

  public userList: any = [];

  constructor(private http: HttpClient, private router: Router) { }

  public logUser() {
    this.saveData();
    this.http.get("http://localhost:8080/user/view-users").subscribe((data: any) => {
      this.userList = data;

      if (this.userDetails.email == "naveenanuja83@gmail.com" && this.userDetails.password == "1008") {
        this.router.navigate(['/admin']);
      } else {
        const matchingUser = this.userList.find(
          (user: any) => user.email === this.userDetails.email && user.password === this.userDetails.password
        );

        if (matchingUser) {
          alert("Login successfully !!!");
          this.router.navigate(['/popular']);
        } else {
          alert("User not found. Please sign up.");
        }
      }
    });
  }

  public saveData(){
    this.http.get(`http://localhost:8080/user/search-by-email/${this.userDetails.email}`).subscribe((data:any)=>{
      localStorage.setItem("userData",JSON.stringify(data));
      console.log(data);
    })
  }
}
