import { Component } from '@angular/core';
import { CommentsService } from './services/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API_CALLING';

  comments: any[] = [];
  constructor(private commentsService: CommentsService) {
  }

  getComments() {
    this.commentsService.getAllComments().subscribe( res =>{
      console.log(res);
      this.comments = res.comments; // Assuming the response has a 'comments' property
    }
    );
  }
}
