import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-editform',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './editform.component.html',
  styleUrl: './editform.component.css'
})
export class EditformComponent {

  @Input() 
  public userData: any;
  @Output() back = new EventEmitter<void>();

  constructor(private http:HttpClient){}

  public onBack() {
    this.back.emit();
  }

  public updateUsers() {
    this.http.put("http://localhost:8080/user/update-user",this.userData).subscribe(() => {
      alert("User Updated Successfully!");
    });
  }
}
