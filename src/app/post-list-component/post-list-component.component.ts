import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postParagraph: string;
  @Input() postLike: number;
  @Input() postCreateAt: Date;

  constructor() { 
  }

  ngOnInit() {
  }

  onSuccess()
  {
    this.postLike ++;
    console.log("+1 " + this.postTitle);
  }

  onFailure()
  {
    this.postLike --;
    console.log("-1 " + this.postTitle);
  }

}
