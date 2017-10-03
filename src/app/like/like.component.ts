import { Component, OnInit , Input, Output} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('likesCount') likesCount: number;
  @Input() isLiked: boolean;
  
  changeLike() {
    this.likesCount += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
  }

  constructor() { }

  ngOnInit() {
  }

  

}
