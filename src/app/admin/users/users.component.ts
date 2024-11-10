import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditformComponent } from '../editform/editform.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule, EditformComponent, CommonModule, RouterLink, FormsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public userList: any = [];
  public selectedUser: any = {};
  public showEditForm: boolean = false;
  public userId: String = '';

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  public loadUsers() {
    this.http.get("http://localhost:8080/user/view-users").subscribe((data) => {
      this.userList = data;
    });
  }

  public editUsers(user: any) {
    this.selectedUser = user;
    this.showEditForm = true;
  }

  public backToUserList() {
    this.showEditForm = false;
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
