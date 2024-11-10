import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-suggetion',
  standalone: true,
  imports: [RouterLink,NgFor,HttpClientModule,CommonModule,FormsModule],
  templateUrl: './suggetion.component.html',
  styleUrl: './suggetion.component.css'
})
export class SuggetionComponent {

  public suggetionId: String='';

  constructor(private http: HttpClient) {
    this.loadList();
   }

  public suggestionList:any = []

  public loadList(){
    this.http.get("http://localhost:8080/suggestion/view-suggestions").subscribe((data=>{
      this.suggestionList=data;
    }));
  }

  public deleteSuggetions(id: any) {
    this.http.delete(`http://localhost:8080/suggestion/delete-suggestions/${id}`).subscribe(() => {
      alert("Comment Deleted Successfully!");
      this.loadList();
    });
  }

  public searchComment() {
    this.http.get(`http://localhost:8080/suggestion/search-suggestion-by-id/${this.suggetionId}`).subscribe((data) => {
      if(data){
        this.suggestionList=[data];
        this.suggetionId='';
      }else{
      alert(`Comment is not found in id: ${this.suggetionId}`);
      this.loadList();
      this.suggetionId='';
      }
    });
  }
}
