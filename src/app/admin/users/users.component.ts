import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, FormsModule , NgFor],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public userList: any = [];
  public selectedUser: any = {};
  public userId: String = '';

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  public loadUsers() {
    this.http.get("http://localhost:8080/user/view-users").subscribe((data) => {
      this.userList = data;
    });
  }


  public deleteUsers(id: any) {
    this.http.delete(`http://localhost:8080/user/delete-user/${id}`).subscribe((data) => {
      alert("User Deleted Successfully!");
      this.loadUsers();
    });
  }

  public searchUsers() {
    this.http.get(`http://localhost:8080/user/search-by-id/${this.userId}`).subscribe((data) => {
      if (data) {
        this.userList = [data];
        this.userId = '';
      } else {
        alert(`User is not found in id: ${this.userId}`);
        this.loadUsers();
        this.userId = '';
      }
    });
  }
}
